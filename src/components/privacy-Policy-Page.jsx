import React, { useEffect } from "react";

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const content = [
        {
            id: 1,
            heading: "Introduction",
            content: "Welcome to BrokerApp, the innovative platform designed to connect real estate brokers and agents. Our app facilitates the sharing of property listings, market updates, and enables brokers to connect with potential clients. We are committed to protecting the privacy of our users and ensure the confidentiality of the information provided. This Privacy Policy outlines how we collect, use, store, and protect your personal information.",
            subcontent: [],
            list: []
        },
        {
            id: 2,
            heading: "Effective Date",
            content: "This Privacy Policy is effective as of [Insert Date].",
            subcontent: [],
            list: []
        },
        {
            id: 3,
            heading: "Information Collection",
            content: "BrokerApp collects the following types of personal information from its users:",
            subcontent: [
                {
                    id: 1,
                    heading: "Personal Identification Information",
                    content: "Including but not limited to name, email address, phone number, and brokerage affiliation. "
                },
                {
                    id: 2,
                    heading: "Profile Information",
                    content: "Information that brokers provide to customize their profile, including property listings and professional background."
                },
                {
                    id: 3,
                    heading: "Communication Data",
                    content: "Messages and communications between brokers within the app."
                },
                {
                    id: 3,
                    heading: "Usage Data",
                    content: "Information on how users interact with the app, such as features used and content viewed."
                }
            ],
            list: []
        },
        {
            id: 3,
            heading: "How Information is Collected",
            content: "We collect information through:",
            subcontent: [
                {
                    id: 1,
                    heading: "Direct Submissions",
                    content: "Information you provide when creating an account, customizing your profile, or communicating through the app."
                },
                {
                    id: 2,
                    heading: "App Usage",
                    content: "Automatically collected data on how you interact with BrokerApp and its features."
                },
                {
                    id: 3,
                    heading: "Third-Party Services",
                    content: "nformation collected through third-party services integrated with BrokerApp for analytics and advertising purposes."
                }
            ],
            list: []
        },
        {
            id: 4,
            heading: "Use of Information",
            content: "The information we collect is used to:",
            subcontent: [],
            list: [
                "Enhance app functionality and user experience.",
                "Facilitate communication and collaboration between brokers.",
                "Showcase property listings and broker profiles.",
                "Provide customer support and respond to inquiries.",
                "Inform users of updates and market trends.",
                "Information Sharing and Disclosure"
            ]
        },
        {
            id: 5,
            heading: "Information Sharing and Disclosure",
            content: "We may share or disclose your information:",
            subcontent: [],
            list: [
                "With service providers and partners to support app functionality.",
                "For legal reasons, if required by law or to protect our rights.",
                "In the event of a business transfer, such as a merger or acquisition."
            ]
        },
        {
            id: 6,
            heading: "Data Storage and Security",
            content: "We implement robust security measures to protect your data from unauthorized access, alteration, or destruction. Your personal information is stored on secure servers and is accessible only by authorized personnel.",
            subcontent: [],
            list: []
        },
        {
            id: 7,
            heading: "User Rights",
            content: "Users have the right to:",
            subcontent: [],
            list: [
                "Access their personal information.",
                "Request correction of any inaccurate data.",
                "Delete their account and associated data.",
                "Object to certain uses of their information.",

            ]
        },
        {
            id: 8,
            heading: "Children's Privacy",
            content: "BrokerApp is not intended for children under the age of 18. We do not knowingly collect personal information from children under this age.",
            subcontent: [],
            list: []
        },
        {
            id: 9,
            heading: "Third-Party Services",
            content: "BrokerApp utilizes third-party services for analytics and advertising. We encourage our users to review the privacy policies of these third-party services.",
            subcontent: [],
            list: []
        },
        {
            id: 10,
            heading: "Changes to Privacy Policy",
            content: "We may update our Privacy Policy from time to time. Users will be notified of any significant changes through the app or via email.",
            subcontent: [],
            list: []
        },
        {
            id: 11,
            heading: "Contact Information",
            content: "For questions or concerns regarding this Privacy Policy, please contact us at [Insert Contact Information].",
            subcontent: [],
            list: []
        }
    ];

    return (
        <div className="lg:mt-[180px] mt-[140px] mb-20">
            <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-3xl mx-auto my-10 font-medium">
                Privacy Policy
            </h1>

            {/* display the content here */}
            <div className="container mx-auto lg:px-10 px-5">
                {content.map((item) => (
                    <div key={item.id} className="my-10">
                        <h2 className="text-2xl font-semibold">{item.heading}</h2>
                        <p className="my-5">{item.content}</p>
                        {item.subcontent.length > 0 && (
                            <div className="ml-5">
                                {item.subcontent.map((subitem) => (
                                    <div key={subitem.id}>
                                        <h3 className="text-lg font-semibold">{subitem.heading}</h3>
                                        <p className="my-3">{subitem.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {item.list.length > 0 && (
                            <div className="ml-5">
                                <ul>
                                    {item.list.map((listItem, index) => (
                                        <li key={index} className="my-3">{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
};

export default PrivacyPolicyPage;
