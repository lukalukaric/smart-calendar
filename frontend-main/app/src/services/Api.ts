import User from '../interfaces/IUser';
import UserLoginData from '../interfaces/IUserLoginData';
import UserRegisterData from '../interfaces/IUserRegisterData';

const CONFIG = {
  baseUrl: 'localhost:3000/api',
};

const get = async (url: string) => fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
const post = async (url: string, payload: object) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

/**
 * Posts login data to the API and returns the User object or an Error object.
 * @param user object containing the username and password
 * @returns Error if login wasn't successful or User object if login was successful
 */
const logIn = async (user: UserLoginData): Promise<Error | User> => {
  if (!user.username || !user.password) return new Error('Please provide the users username and password.');

  const response = await post(`${CONFIG.baseUrl}/login`, user);

  if (response.status === 200) {
    return await response.json() as User;
  }
  if (response.status === 500) {
    return new Error('Invalid log in credentials.');
  }

  return new Error('Something went wrong (logIn function).');
};

/**
 * Posts register data to the API and returns the User object or an Error object.
 * @param user object containing all user data required for the registration
 * @returns Error if registration wasn't successful or User object if a user was created
 */
const register = async (user: UserRegisterData): Promise<Error | User> => {
  if (!user.username || !user.password) { return new Error('Please provide all required info.'); }

  return new Error('Register function not implemented yet.');
};

export { logIn, register };
