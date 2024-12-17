export const menus = [

    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Location",
                        to: "/location",
                        children: [
                            {
                                label: "city",
                                to: "city"
                            }
                        ]
                    },
                ],
            },
        ],
    },

    {
        label: "Setting",
        to: "/setting",
        children: [
            {
                label: "Account",
                to: "/account",
            },
            {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Register",
                        to: "/register",
                        children: [
                            {
                                label: "user Details"
                            }
                        ]
                    },
                ],
            },
        ],
    },
];

export default menus;
