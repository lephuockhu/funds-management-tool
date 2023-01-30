import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@mui/material";

const MainTable = ({ headers, rows }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{headers.map((header) => {
							return header.name == "coin_name" ? (
								<TableCell>{header.name}</TableCell>
							) : (
								<TableCell align="right">{header.name}</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							{headers.map((header) => {
								return header.name == "coin_name" ? (
									<TableCell component="th" scope="row">
										{row[header.name] || null}
									</TableCell>
								) : (
									<TableCell align="right">{row[header.name] || null}</TableCell>
								);
							})}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MainTable;
