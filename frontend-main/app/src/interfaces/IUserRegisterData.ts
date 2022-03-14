interface UserRegisterData {
    username: string,
    password: string,
    email: string,
    gender: 'm' | 'f',
    country: string,
    birthDate: Date
}
export default UserRegisterData;
