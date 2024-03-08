export default function ProfileCard(
    {
        firstName,
        lastName,
        email,
        phoneNumber,
        profileImage
    }: ProfileCardProps
) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg shadow-md bg-red-500">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={profileImage} alt="" width={64} height={64} />
                </div>
                <div>
                    <div className="text-sm font-medium text-gray-900">{`${firstName} ${lastName}`}</div>
                    <div className="text-sm text-gray-500">{email}</div>
                </div>
            </div>
            <div>
                <div className="text-sm font-medium text-gray-900">{phoneNumber}</div>
            </div>
            <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M6.707 4.293a1 1 0 011.414 0L12 8.172l3.879-3.879a1 1 0 111.414 1.414L13.414 9.586l3.879 3.879a1 1 0 01-1.414 1.414L12 11l-3.879 3.879a1 1 0 01-1.414-1.414L10.586 10 6.707 6.121a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}

export interface ProfileCardProps {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
}
