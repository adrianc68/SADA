const {Account} = require("../../models/account");
const {Role} = require("../../models/role");
const {AccountStatusType} = require("../../models/types/accountStateType");
const {User} = require("../../models/user");

/**
 * Check if username exist in database.
 * @param {string} username the username as string.
 * @returns true if exist otherwise false.
 */
const isUsernameRegistered = async (username) => {
	let isUsernameRegistered = false;
	const user = await User.findAll({
		where: {username}
	});
	isUsernameRegistered = (user.length !== 0);
	return isUsernameRegistered;
};

/**
 * Check if email exist in database.
 * @param {string} email the email as string.
 * @returns true if exist otherwise false.
 */
const isEmailRegistered = async (email) => {
	let isEmailRegistered = false;
	const account = await Account.findAll({
		where: {email}
	});
	isEmailRegistered = (account.length !== 0);
	return isEmailRegistered;
};

/**
 * Create an user in database.
 * @param {user} user the user object that contain password, email, name, presentation, username, phoneNumber, birthday and confirmationCode
 * @returns true if entity was added otherwise false.
 */
const createUser = async (user) => {
	const {name, address, email, password, phone, birthdate, account_state, id_role} = user;
	let id_user;
	const t = await sequelize.transaction();
	try {
		const user = await User.create({
			name,
			address,
		}, {transaction: t});
		id_user = user.id;
		await Account.create({
			email,
			password: encondePassword(password),
			id_user,
			phone,
			birthdate,
			account_state
		}, {transaction: t});
		await UserRole.create({
			id_role,
			id_user
		}, {transaction: t});
		await t.commit();
	} catch (error) {
		await t.rollback();
		throw error;
	}
	return true;
};

const getAllUsers = async () => {
	let users = [];
	try {
		users = await User.findAll({
			attributtes: ["id", "name", "address", "Account.email", "Account.phone", "Account.birthdate", "Account.register_date", "Account.account_state"],
			include: [{
				model: Account,
				as: "Account",
				attributes: []
			}]
		});
	} catch (error) {
		throw error;
	}
	return users;
}


module.exports = { getAllUsers };
