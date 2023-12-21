import {
	IndexTable,
	LegacyCard,
	useIndexResourceState,
	Text,
	Badge,
	useBreakpoints,
	Page,
	TextField,
	IndexFilters,
	useSetIndexFiltersMode,
	ChoiceList,
	RangeSlider,
	Pagination,
} from "@shopify/polaris";
import React from "react";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useState, useCallback, useEffect } from "react";
import { getEmailTemplate } from "../hooks";
function disambiguateLabel(key, value) {
	switch (key) {
		case "moneySpent":
			return `Money spent is between $${value[0]} and $${value[1]}`;
		case "taggedWith":
			return `Tagged with ${value}`;
		case "accountStatus":
			return value.map((val) => `Customer ${val}`).join(", ");
		default:
			return value;
	}
}

function isEmpty(value) {
	if (Array.isArray(value)) {
		return value.length === 0;
	} else {
		return value === "" || value == null;
	}
}
export default function ManagementTable() {
	const [loading, setLoading] = useState(true);
	const [total, setTotal] = useState(0);

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	useEffect(() => {
		getEmailTemplate({ page: 1, itemsPerPage: 1 })
			.then((res) => {
				setEmails(res.data);
				setCurrentPage(res.pagination.current_page);
				setTotal(res.pagination.total);
				setTotalPage(res.pagination.total_pages);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);
	const { t } = useTranslation();
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	const [itemStrings, setItemStrings] = useState([
		"All",
		"Unpaid",
		"Open",
		"Closed",
		"Local delivery",
		"Local pickup",
	]);
	const deleteView = (index) => {
		const newItemStrings = [...itemStrings];
		newItemStrings.splice(index, 1);
		setItemStrings(newItemStrings);
		setSelected(0);
	};

	const duplicateView = async (name) => {
		setItemStrings([...itemStrings, name]);
		setSelected(itemStrings.length);
		await sleep(1);
		return true;
	};

	const tabs = itemStrings.map((item, index) => ({
		content: item,
		index,
		onAction: () => {},
		id: `${item}-${index}`,
		isLocked: index === 0,
		actions:
			index === 0
				? []
				: [
						{
							type: "rename",
							onAction: () => {},
							onPrimaryAction: async (value) => {
								const newItemsStrings = tabs.map((item, idx) => {
									if (idx === index) {
										return value;
									}
									return item.content;
								});
								await sleep(1);
								setItemStrings(newItemsStrings);
								return true;
							},
						},
						{
							type: "duplicate",
							onPrimaryAction: async (value) => {
								await sleep(1);
								duplicateView(value);
								return true;
							},
						},
						{
							type: "edit",
						},
						{
							type: "delete",
							onPrimaryAction: async () => {
								await sleep(1);
								deleteView(index);
								return true;
							},
						},
				  ],
	}));
	const [selected, setSelected] = useState(0);
	const onCreateNewView = async (value) => {
		await sleep(500);
		setItemStrings([...itemStrings, value]);
		setSelected(itemStrings.length);
		return true;
	};
	const sortOptions = [
		{
			label: "Total User",
			value: "totalUser asc",
			directionLabel: "Ascending",
		},
		{
			label: "Total User",
			value: "totalUser desc",
			directionLabel: "Descending",
		},
		{ label: "Date", value: "date asc", directionLabel: "Ascending" },
		{ label: "Date", value: "date desc", directionLabel: "Descending" },
		{ label: "Title", value: "total asc", directionLabel: "A-Z" },
		{ label: "Title", value: "total desc", directionLabel: "Z-A" },
	];
	const [sortSelected, setSortSelected] = useState(["order asc"]);
	const { mode, setMode } = useSetIndexFiltersMode();
	const onHandleCancel = () => {};
	const onHandleSave = async () => {
		await sleep(1);
		return true;
	};

	const [accountStatus, setAccountStatus] = useState(undefined);
	const [moneySpent, setMoneySpent] = useState(undefined);
	const [taggedWith, setTaggedWith] = useState("");
	const [queryValue, setQueryValue] = useState("");
	const [emails, setEmails] = useState([]);

	const handleAccountStatusChange = useCallback(
		(value) => setAccountStatus(value),
		[]
	);
	const handleMoneySpentChange = useCallback(
		(value) => setMoneySpent(value),
		[]
	);
	const handleTaggedWithChange = useCallback(
		(value) => setTaggedWith(value),
		[]
	);
	const handleFiltersQueryChange = useCallback(
		(value) => {
			setQueryValue(value);
			// Fetch data when the query changes
			getEmailTemplate({ search: value, page: 1, itemsPerPage: 1 })
				.then((res) => setEmails(res.data))
				.catch((error) => console.error("Error fetching data:", error));
		},
		[getEmailTemplate]
	);
	const handleAccountStatusRemove = useCallback(
		() => setAccountStatus(undefined),
		[]
	);
	const handleMoneySpentRemove = useCallback(
		() => setMoneySpent(undefined),
		[]
	);
	const handleTaggedWithRemove = useCallback(() => setTaggedWith(""), []);
	const handleQueryValueRemove = useCallback(() => setQueryValue(""), []);
	const handleFiltersClearAll = useCallback(() => {
		handleAccountStatusRemove();
		handleMoneySpentRemove();
		handleTaggedWithRemove();
		handleQueryValueRemove();
	}, [
		handleAccountStatusRemove,
		handleMoneySpentRemove,
		handleQueryValueRemove,
		handleTaggedWithRemove,
	]);

	const filters = [
		{
			key: "accountStatus",
			label: "Account status",
			filter: (
				<ChoiceList
					title="Account status"
					titleHidden
					choices={[
						{ label: "Enabled", value: "enabled" },
						{ label: "Not invited", value: "not invited" },
						{ label: "Invited", value: "invited" },
						{ label: "Declined", value: "declined" },
					]}
					selected={accountStatus || []}
					onChange={handleAccountStatusChange}
					allowMultiple
				/>
			),
			shortcut: true,
		},
		{
			key: "taggedWith",
			label: "Tagged with",
			filter: (
				<TextField
					label="Tagged with"
					value={taggedWith}
					onChange={handleTaggedWithChange}
					autoComplete="off"
					labelHidden
				/>
			),
			shortcut: true,
		},
		{
			key: "moneySpent",
			label: "Money spent",
			filter: (
				<RangeSlider
					label="Money spent is between"
					labelHidden
					value={moneySpent || [0, 500]}
					prefix="$"
					output
					min={0}
					max={2000}
					step={1}
					onChange={handleMoneySpentChange}
				/>
			),
		},
	];

	const appliedFilters = [];
	if (accountStatus && !isEmpty(accountStatus)) {
		const key = "accountStatus";
		appliedFilters.push({
			key,
			label: disambiguateLabel(key, accountStatus),
			onRemove: handleAccountStatusRemove,
		});
	}
	if (moneySpent) {
		const key = "moneySpent";
		appliedFilters.push({
			key,
			label: disambiguateLabel(key, moneySpent),
			onRemove: handleMoneySpentRemove,
		});
	}
	if (!isEmpty(taggedWith)) {
		const key = "taggedWith";
		appliedFilters.push({
			key,
			label: disambiguateLabel(key, taggedWith),
			onRemove: handleTaggedWithRemove,
		});
	}

	const resourceName = {
		singular: "email",
		plural: "emails",
	};

	const { selectedResources, allResourcesSelected, handleSelectionChange } =
		useIndexResourceState(emails);

	const rowMarkup = loading ? (
		<IndexTable.Row>
			<IndexTable.Cell colSpan={8}>Loading...</IndexTable.Cell>
		</IndexTable.Row>
	) : (
		emails.map(
			(
				{
					id,
					email,
					startDate,
					endDate,
					title,
					totalUser,
					openRate,
					clickRate,
					status,
				},
				index
			) => (
				<IndexTable.Row
					id={id}
					key={id}
					selected={selectedResources.includes(id)}
					position={index}
				>
					<IndexTable.Cell>
						<Text
							variant="bodyMd"
							fontWeight="bold"
							as="span"
						>
							{email}
						</Text>
					</IndexTable.Cell>
					<IndexTable.Cell>{startDate}</IndexTable.Cell>
					<IndexTable.Cell>{endDate}</IndexTable.Cell>
					<IndexTable.Cell>{title}</IndexTable.Cell>
					<IndexTable.Cell>
						<Text
							as="span"
							alignment="center"
							numeric
						>
							{totalUser}
						</Text>
					</IndexTable.Cell>
					<IndexTable.Cell>
						<div style={{ textAlign: "center", color: "#00BFAF" }}>
							<Text>{openRate}</Text>
						</div>
					</IndexTable.Cell>
					<IndexTable.Cell>
						<div style={{ textAlign: "center", color: "#00ACE2" }}>
							<Text>{clickRate}</Text>
						</div>
					</IndexTable.Cell>
					<IndexTable.Cell>
						<div
							style={{
								textAlign: "center",
								color: status === "Sent" ? "#3A974C" : "#FFCC00",
							}}
						>
							<Text>{status}</Text>
						</div>
					</IndexTable.Cell>
				</IndexTable.Row>
			)
		)
	);

	return (
		<Page>
			<TitleBar
				title={t("Email Automation Management")}
				primaryAction={null}
			/>
			<LegacyCard>
				<IndexFilters
					sortOptions={sortOptions}
					sortSelected={sortSelected}
					queryValue={queryValue}
					queryPlaceholder="Searching in all"
					onQueryChange={handleFiltersQueryChange}
					onQueryClear={() => setQueryValue("")}
					onSort={setSortSelected}
					cancelAction={{
						onAction: onHandleCancel,
						disabled: false,
						loading: false,
					}}
					tabs={tabs}
					selected={selected}
					onSelect={setSelected}
					canCreateNewView
					onCreateNewView={onCreateNewView}
					filters={filters}
					appliedFilters={appliedFilters}
					onClearAll={handleFiltersClearAll}
					mode={mode}
					setMode={setMode}
				/>
				<IndexTable
					condensed={useBreakpoints().smDown}
					resourceName={resourceName}
					itemCount={emails.length}
					selectedItemsCount={
						allResourcesSelected ? "All" : selectedResources.length
					}
					onSelectionChange={handleSelectionChange}
					headings={[
						{ title: "Email" },
						{ title: "Start Date" },
						{ title: "End Date" },
						{ title: "Title" },
						{ title: "Total User", alignment: "center" },
						{ title: "Open Rate", alignment: "center" },
						{ title: "Click Rate", alignment: "center" },
						{ title: "Status", alignment: "center" },
					]}
				>
					{rowMarkup}
				</IndexTable>
				<div
					style={{
						display: "flex",
						marginRight: 0,
						margin: 0,
						alignItems: "flex-end",
						justifyContent: "flex-end",
					}}
				>
					<Pagination
						onPrevious={() => {
							const nextPage = currentPage + 1;
							if (nextPage <= totalPage) {
								getEmailTemplate({
									search: value,
									page: nextPage,
									itemsPerPage: 1,
								})
									.then((res) => {
										setEmails(res.data);
										setCurrentPage(res.pagination.current_page);
										setTotal(res.pagination.total);
										setTotalPage(res.pagination.total_pages);
										setLoading(false);
									})
									.catch((error) =>
										console.error("Error fetching data:", error)
									);
							}
						}}
						onNext={() => {
							const prevPage = currentPage - 1;
							if (prevPage >= 1) {
								getEmailTemplate({
									search: value,
									page: prevPage,
									itemsPerPage: 1,
								})
									.then((res) => {
										setEmails(res.data);
										setCurrentPage(res.pagination.current_page);
										setTotal(res.pagination.total);
										setTotalPage(res.pagination.total_pages);
										setLoading(false);
									})
									.catch((error) =>
										console.error("Error fetching data:", error)
									);
							}
						}}
						type="table"
						hasNext
						label={`${currentPage}`}
					/>
				</div>
			</LegacyCard>
		</Page>
	);
}
