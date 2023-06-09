const {sequelize} = require("../../config/db");
const {encondeSHA256} = require("../../helpers/crypt");
const {Account} = require("../../models/account");
const {Role} = require("../../models/role");
const {AccountStatusType} = require("../../models/types/accountStateType");
const {User} = require("../../models/user");

/**
 * Get user,account data from database using email
 * @param {*} email.
 * @returns undefined or user data retrieved from database
 */
const getAccountLoginData = async (email) => {
	const user = await User.findAll({
		where: {
			'$Account.email$': email
		},
		attributes: ["id", "name", "Account.password", "Account.email", "Account.account_state"],
		include: [{
			model: Account,
			as: "Account",
			attributes: [],
		}],
		plain: true,
		raw: true
	});
	return user;
};

/***
 * Update account settings.
 * @param {account} the new data account including id_user
*  @returns true if account was updated otherwise false
 */
const updateAccountSettings = async (account) => {
	let isUpdated = false;
	const {email, password, phone, birthdate, id_user} = account;
	const t = await sequelize.transaction();
	try {
		await Account.update({
			email,
			password: encondeSHA256(password),
			phone,
			birthdate
		}, {
			where: id_user,
			transaction: t
		})
		await t.commit();
		isUpdated = true;
	} catch (error) {
		await t.rollback();
		throw error;
	}
	return isUpdated;
};

/**
 * Disable an Account. Change AccountStatusType to DISABLED.
 * @param {int} id_account
 * @returns true if Account is updated otherwise false.
 */
const disableAccount = async (id_user) => {
	let isUpdated = false;
	const t = await sequelize.transaction();
	try {
		await Account.update({
			account_status: AccountStatusType.DISABLED
		}, {
			where: id_user,
			transaction: t
		});
		await t.commit();
		isUpdated = true;
	} catch (error) {
		await t.rollback();
		throw error;
	}
	return isUpdated;
};

/**
 * Enable an account. Change AccountStatusType to ACTIVE.
 * @param {int} id_user
 * @returns true if Account is updated otherwise false.
 */
const enableAccount = async (id_user) => {
	let isUpdated = false;
	try {
		await Account.update({
			account_status: AccountStatusType.ACTIVE
		}, {
			where: id_user,
			transaction: t
		});
		await t.commit();
		isUpdated = true;
	} catch (error) {
		await t.rollback();
		throw error;
	}

	return isUpdated;
};


module.exports = {getAccountLoginData, updateAccountSettings, disableAccount, enableAccount}
