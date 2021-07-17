import React, { useState, useEffect } from 'react';
import '../global/Global.css';
function ComputerNetworks() {
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        setFlag(true)
    }, []);
    return (
        <>{flag &&
            <div className="layout">
                <h2 className="sub-heading">Table of contents</h2>
                <ul>
                    <li><a className="paragraph" href="#I1">Introduction</a></li>
                    <li><a className="paragraph" href="#I2">Why to learn Computer Networks ?</a></li>
                    <li><a className="paragraph" href="#I3">Applications of Communication & Computer Network</a></li>
                    <li><a className="paragraph" href="#I4">Classification of Computer Networks</a></li>
                </ul>
                <h2 className="sub-heading" id="I1">Introduction</h2>
                <p className="paragraph">
                Data communications refers to the transmission of this digital data between two or
                more computers and a computer network or data network is a telecommunications 
                network that allows computers to exchange data. The physical connection between
                networked computing devices is established using either cable media or wireless
                media. The best-known computer network is the Internet. This tutorial should teach
                you basics of Data Communication and Computer Network (DCN) and will also take you
                through various advance concepts related to Data Communication and Computer 
                Network.
                A system of interconnected computers and computerized peripherals such as printers
                is called computer network. This interconnection among computers facilitates
                information sharing among them. Computers may connect to each other by either
                wired or wireless media.
            </p>
                
                <h2 className="sub-heading" id="I2">Why to learn Computer Networks ?</h2>
                <p className="paragraph">
                <ul>
                        <li>
                        <b>Network Basic Understanding - </b>
                        A system of interconnected computers and computerized peripherals such as
                        printers is called computer network. This interconnection among computers
                        facilitates information sharing among them. Computers may connect to each
                        other by either wired or wireless media.
                        </li>
                        <li>
                        <b>Network Engineering - </b>
                        Networking engineering is a complicated task, which involves software,
                        firmware, chip level engineering, hardware, and electric pulses. To ease 
                        network engineering, the whole networking concept is divided into multiple
                        layers. Each layer is involved in some particular task and is independent
                        of all other layers. But as a whole, almost all networking tasks depend
                        on all of these layers. Layers share data between them and they depend
                        on each other only to take input and send output.
                        </li>
                        <li>
                        <b>Internet - </b>
                        A network of networks is called an internetwork, or simply the internet.
                        It is the largest network in existence on this planet.The internet hugely
                        connects all WANs and it can have connection to LANs and Home networks.
                        Internet uses TCP/IP protocol suite and uses IP as its addressing protocol.
                        Present day, Internet is widely implemented using IPv4. Because of shortage
                        of address spaces, it is gradually migrating from IPv4 to IPv6. Internet
                        enables its users to share and access enormous amount of information
                        worldwide. It uses WWW, FTP, email services, audio and video streaming
                        etc. At huge level, internet works on Client-Server model. Internet uses
                        very high speed backbone of fiber optics. To inter-connect various
                        continents, fibers are laid under sea known to us as submarine
                        communication cable.
                    </li>
                    </ul>
                </p>
                
            <h2 className="sub-heading" id="I3">Applications of Communication & Computer Network</h2>
                <p className="paragraph">
                Computer systems and peripherals are connected to form a network.
                They provide numerous advantages:
                <ul>
                    <li>Resource sharing such as printers and storage devices
                    </li>
                    <li>
                        Exchange of information by means of e-Mails and FTP
                    </li>
                    <li>
                        Information sharing by using Web or Internet
                    </li>
                    <li>
                        Interaction with other users using dynamic web pages
                    </li>
                    <li>
                        IP phones
                    </li>
                    <li>
                        Video conferences
                    </li>
                    <li>
                        Parallel computing
                    </li>
                    <li>
                        Instant messaging
                        </li>
                    </ul>
                </p>
                
            <h2 className="sub-heading" id="I4">Classification of Computer Networks</h2>
                <p className="paragraph">
                Computer networks are classified based on various factors.They includes:
                <h3>Geographical Span</h3>
                Geographically a network can be seen in one of the following categories:

                <li>It may be spanned across your table, among Bluetooth enabled devices,. Ranging not more than few meters.
                </li>
                <li>
                It may be spanned across a whole building, including intermediate devices to connect all floors.
                </li>
                <li>
                    It may be spanned across a whole city.
                </li>
                <li>
                    It may be spanned across multiple cities or provinces.
                </li>
                <li>                    
                    It may be one network covering whole world.
                </li>
                <h3>Inter-Connectivity</h3>
                Components of a network can be connected to each other differently in some 
                fashion. By connectedness we mean either logically , physically , or both ways.
                <li>
                    Every single device can be connected to every other device on network, making
                    the network mesh.
                </li>
                <li>
                    All devices can be connected to a single medium but
                    geographically disconnected, created bus like structure.
                </li>
                <li>
                    Each device is connected
                    to its left and right peers only, creating linear structure.
                </li>
                <li>
                    All devices connected
                    together with a single device, creating star like structure.
                </li>
                <li>    
                    All devices connected
                    arbitrarily using all previous ways to connect each other, resulting in a hybrid
                    structure.
                </li>
            </p>
            <h3>Administration</h3>
            <p className="paragraph">From an administrator’s point of view, a network can be
            private network which belongs a single autonomous system and cannot be accessed
            outside its physical or logical domain.A network can be public which is accessed
                    by all.</p>
            <h3>Network Architecture</h3>
            <p className="paragraph">Computer networks can be discriminated into various types such as Client-Server,
            peer-to-peer or hybrid, depending upon its architecture.

            There can be one or more systems acting as Server. Other being Client, requests
            the Server to serve requests.Server takes and processes request on behalf of
            Clients.
            Two systems can be connected Point-to-Point, or in back-to-back fashion. They both
            reside at the same level and called peers.
            There can be hybrid network which involves network architecture of both the above types.</p>    
                <br />
                <br />
            </div>}</>
    );
}

export default ComputerNetworks;
