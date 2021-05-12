import React, { useState } from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Frameworks from 'components/Documentation/Frameworks.js';
import Tab from 'components/Tab/Tab';
import TabList from 'components/Tab/TabList';
import TabItem from 'components/Tab/TabItem';
import TabContent from 'components/Tab/TabContent';
import TabPane from 'components/Tab/TabPane';

export default function TabTextCode({ copyText, onCopy }) {
    const [color, setColor] = useState('lightBlue');
    const [type] = useState('react');
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState();
    const [openTab, setOpenTab] = useState(1);
    const onFrameworkClick = Frameworks(type, setShowModal, setModalText);

    const codeToShow = `import React from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";

export default function Tab() {
    const [openTab, setOpenTab] = useState(1);

    return (
        <Tab>
            <TabList color="${color}">
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    ripple="light"
                    active={openTab === 1 ? true : false}
                    href="tabItem"
                >
                    Discover
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    ripple="light"
                    active={openTab === 2 ? true : false}
                    href="tabItem"
                >
                    Profile
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                    }}
                    ripple="light"
                    active={openTab === 3 ? true : false}
                    href="tabItem"
                >
                    Settings
                </TabItem>
            </TabList>

            <TabContent>
                <TabPane active={openTab === 1 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                    <p>
                        I will be the leader of a company that ends up being worth
                        billions of dollars, because I got the answers. I understand
                        culture. I am the nucleus. I think that’s a responsibility that
                        I have, to push possibilities, to show people, this is the level
                        that things could be at. I think that’s a responsibility that I
                        have, to push possibilities, to show people, this is the level
                        that things could be at.
                    </p>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
            </TabContent>
        </Tab>
    );
}`;

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h5 className="text-2xl font-normal mt-0 mb-0 ">
                                        Component not supported
                                    </h5>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                                        At the moment we do not support the
                                        choosen framework ({modalText}) for this
                                        component.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <DocsSnippet
                copyText={copyText}
                onCopy={onCopy}
                activeColor={color}
                activeFramework={type}
                codeToShow={codeToShow}
                onColorClick={(color) => setColor(color)}
                onFrameworkClick={onFrameworkClick}
            >
                <Tab>
                    <TabList color={color}>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            ripple="light"
                            active={openTab === 1 ? true : false}
                            href="tabItem"
                        >
                            Discover
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            ripple="light"
                            active={openTab === 2 ? true : false}
                            href="tabItem"
                        >
                            Profile
                        </TabItem>
                        <TabItem
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            ripple="light"
                            active={openTab === 3 ? true : false}
                            href="tabItem"
                        >
                            Settings
                        </TabItem>
                    </TabList>

                    <TabContent>
                        <TabPane active={openTab === 1 ? true : false}>
                            <p>
                                I think that’s a responsibility that I have, to
                                push possibilities, to show people, this is the
                                level that things could be at. So when you get
                                something that has the name Kanye West on it,
                                it’s supposed to be pushing the furthest
                                possibilities. I will be the leader of a company
                                that ends up being worth billions of dollars,
                                because I got the answers. I understand culture.
                                I am the nucleus.
                            </p>
                        </TabPane>
                        <TabPane active={openTab === 2 ? true : false}>
                            <p>
                                I will be the leader of a company that ends up
                                being worth billions of dollars, because I got
                                the answers. I understand culture. I am the
                                nucleus. I think that’s a responsibility that I
                                have, to push possibilities, to show people,
                                this is the level that things could be at. I
                                think that’s a responsibility that I have, to
                                push possibilities, to show people, this is the
                                level that things could be at.
                            </p>
                        </TabPane>
                        <TabPane active={openTab === 3 ? true : false}>
                            <p>
                                I think that’s a responsibility that I have, to
                                push possibilities, to show people, this is the
                                level that things could be at. So when you get
                                something that has the name Kanye West on it,
                                it’s supposed to be pushing the furthest
                                possibilities. I will be the leader of a company
                                that ends up being worth billions of dollars,
                                because I got the answers. I understand culture.
                                I am the nucleus.
                            </p>
                        </TabPane>
                    </TabContent>
                </Tab>
            </DocsSnippet>
        </>
    );
}
