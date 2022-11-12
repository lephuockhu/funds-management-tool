import models from "../libs/models/index";
import base from "../utils/base";

export default function Home({ history }) {
	return (
		<div>
			<h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
			<h5>{JSON.stringify(history)}</h5>
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const histories = await models.find("histories", {}, {});

	return {
		props: {
			history: base.convert_string_id(histories),
		},
	};
};
