import models from "../libs/models/index";
import base from "../utils/base";

export default function Home({ histories }) {
	return (
		<div className="relative min-h-screen min-w-screen bg-background dark:bg-background-dark dark:text-white transition-all ease-out text-gray text-center flex justify-center items-center overflow-hidden">
			<div className="h-full sm:h-auto w-full sm:w-auto mt-0 sm:mt-4 px-2 sm:px-8 text-sm md:text-md">
				<div className="flex flex-col mt-1 min-h-[75vh] min-w-auto md:min-w-[75vw] xl:min-w-[55vw]">
					<div className="py-2 pb-0 overflow-auto">
						<form>
							<table className="w-full sm:min-w-full table-auto">
								<thead className="relative">
									<tr className="text-md font-medium text-gray-deep uppercase tracking-wider">
										<th scope="col" className="px-6 py-2 w-auto text-center">
											<input
												type="checkbox"
												value="checkedAll"
												className="form-checkbox h-4 w-4"
												onChange=""
												checked=""
											/>
										</th>
										<th scope="col" className="px-6 py-2 text-left">
											Name
										</th>
										<th scope="col" className="px-6 py-2 text-left">
											Email
										</th>
										<th scope="col" className="px-6 py-2 text-left">
											Role
										</th>
										<th scope="col" className="px-6 py-2 text-center">
											Action
										</th>
									</tr>
								</thead>
								<tbody className="relative text-md divide-y-4 divide-transparent">
									{ histories && histories.length > 0 ? (
										currentItems.map((user, index) => (
											<Fragment key={index}>
												{editUserId === user.id ? (
													<EditableRow
														key={index + 20}
														user={editUserForm}
														editUserForm={editUserForm}
														setEditUserForm={setEditUserForm}
														setEditUserId={setEditUserId}
													/>
												) : (
													<DisplayRows
														key={index + 10}
														user={user}
														users={users}
														setUsers={setUsers}
														setEditUserId={setEditUserId}
														setEditUserForm={setEditUserForm}
													/>
												)}
											</Fragment>
										))
									) : (
										<tr className="text-center w-full text-lg text-indigo-500">
											<td colSpan={5} className="p-5">
												<div className="flex flex-col justify-center items-center">
													<img src={icon} alt="Empty" />
													<span className="p-2 text-lg font-semibold">No Users Found</span>
												</div>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</form>
					</div>
				</div>

				<div
					className={`${
						users.length !== 0 ? "flex" : "invisible"
					}  justify-center items-center py-2 md:py-6`}>
					<Pagination
						filteredUsers={filteredUsers}
						itemPerPage={itemPerPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const histories = await models.find("histories", {}, {});

	return {
		props: {
			histories: base.convert_string_id(histories),
		},
	};
};
