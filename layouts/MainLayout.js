import Header from "./header/Header";

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};
export default MainLayout;
