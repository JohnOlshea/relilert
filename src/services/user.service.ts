import { IUserDocument } from '@app/interfaces/user.interface';
import { UserModel } from '@app/models/user.model';
import { Model, Op } from 'sequelize';
import { omit, toLower, upperFirst } from 'lodash';

/**
 * Creates a new user in the database.
 * @param userData - The user data to create, adhering to IUserDocument.
 * @returns A Promise resolving to the created user data without the password.
 * @throws Error if user creation fails.
 */
export async function createUser(userData: IUserDocument): Promise<IUserDocument> {
  try {
    const createdUser: Model = await UserModel.create(userData);
    const userWithoutPassword: IUserDocument = omit(createdUser.dataValues, ['password']) as IUserDocument;
    return userWithoutPassword;
  } catch (error: any) {
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

/**
 * Retrieves a user by their username or email.
 * @param username - The user's username.
 * @param email - The user's email.
 * @returns A Promise resolving to the found user or undefined if no user is found.
 * @throws Error if retrieval fails.
 */
export async function findUserByUsernameOrEmail(username: string, email: string): Promise<IUserDocument | undefined> {
  try {
    const user: IUserDocument | undefined = await UserModel.findOne({
      raw: true,
      where: {
        [Op.or]: [{ username: upperFirst(username) }, { email: toLower(email) }],
      },
    }) as unknown as IUserDocument | undefined;
    return user;
  } catch (error: any) {
    throw new Error(`Failed to retrieve user by username or email: ${error.message}`);
  }
}

/**
 * Retrieves a user by their social ID (Facebook or Google) or email.
 * @param socialId - The social ID of the user.
 * @param email - The user's email.
 * @param providerType - The type of social provider ('facebook' or 'google').
 * @returns A Promise resolving to the found user or undefined if no user is found.
 * @throws Error if retrieval fails.
 */
export async function findUserBySocialId(
  socialId: string,
  email: string,
  providerType: string
): Promise<IUserDocument | undefined> {
  try {
    const socialProviderKey = providerType === 'facebook' ? 'facebookId' : providerType === 'google' ? 'googleId' : '';
    if (!socialProviderKey) throw new Error(`Invalid social provider type: ${providerType}`);

    const user: IUserDocument | undefined = await UserModel.findOne({
      raw: true,
      where: {
        [Op.or]: [
          { [socialProviderKey]: socialId },
          { email: toLower(email) }
        ],
      },
    }) as unknown as IUserDocument | undefined;

    return user;
  } catch (error: any) {
    throw new Error(`Failed to retrieve user by social ID or email: ${error.message}`);
  }
}

/**
 * Retrieves a user by a specified property and type.
 * @param propertyValue - The value of the property to search by.
 * @param propertyType - The type of property ('username' or 'email').
 * @returns A Promise resolving to the found user or undefined if no user is found.
 * @throws Error if retrieval fails.
 */
export async function findUserByProperty(propertyValue: string, propertyType: string): Promise<IUserDocument | undefined> {
  try {
    const userQuery = propertyType === 'username' 
      ? { username: upperFirst(propertyValue) }
      : propertyType === 'email'
      ? { email: toLower(propertyValue) }
      : null;

    if (!userQuery) throw new Error(`Invalid property type: ${propertyType}`);

    const user: IUserDocument | undefined = await UserModel.findOne({
      raw: true,
      where: userQuery,
    }) as unknown as IUserDocument | undefined;

    return user;
  } catch (error: any) {
    throw new Error(`Failed to retrieve user by property: ${error.message}`);
  }
}
