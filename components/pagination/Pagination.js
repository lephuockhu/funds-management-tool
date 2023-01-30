import {
	TablePagination,
} from "@mui/material";

const Pagination = ({ page, count, handleChangePage, rowsPerPage, handleChangeRowsPerPage }) => {
	return (
		<TablePagination
			component="div"
			count={count}
			page={page}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);
};

export default Pagination;