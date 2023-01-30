import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import MainLayout from "../../layouts/MainLayout";
import Models from "../../libs/models";

const headers = [
	{
		name: "coin_name",
	},
	{
		name: "feauture_type",
	},
	{
		name: "stoploss_usdt",
	},
	{
		name: "entry_price",
	},
	{
		name: "target_price",
	},
	{
		name: "stoploss_price",
	},
	{
		name: "leverage",
	},
	{
		name: "extra_info",
	},
];

const History = ({ rows }) => {
    console.log('rows :>> ', rows);
	return (
		<MainLayout>
			<Table headers={headers} rows={rows} />
            <Pagination/>
		</MainLayout>
	);
};

export async function getServerSideProps({ query }) {
	try {
        const { page, limit } = query;
        console.log('query :>> ', query);

        let [rows, total] = await Promise.all([
            Models.find("histories", { status: 1 }, null, { createdBy: -1 }, limit),
            Models.count("histories", { status: 1 }),
        ]);

		return {
			props: {
                query: query,
				rows: JSON.parse(JSON.stringify(rows)),
                total,
			},
		};
	} catch (e) {
		console.error(e);
	}
}

export default History;
