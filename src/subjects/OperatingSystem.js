import React, { useState, useEffect } from 'react';
import '../global/Global.css';
function OperatingSystem() {
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
                    <li><a className="paragraph" href="#I2">Why to learn Operating Systems ?</a></li>
                    <li><a className="paragraph" href="#I3">Applications of Operating System</a></li>
                    <li><a className="paragraph" href="#I4">Memory Management</a></li>
                    <li><a className="paragraph" href="#I5">Processor Management</a></li>
                    <li><a className="paragraph" href="#I6">Device Management</a></li>
                    <li><a className="paragraph" href="#I7">File Management</a></li>
                <li><a className="paragraph" href="#I8">Other Important Activities</a></li>
                </ul>
                <h2 className="sub-heading" id="I1">Introduction</h2>
                <p className="paragraph">
                An operating system (OS) is a collection of software that manages computer hardware
                resources and provides common services for computer programs. The operating system
                is a vital component of the system software in a computer system. This tutorial will
                take you through step by step approach while learning Operating System concepts.
            </p>
            <p className="paragraph">
                It is an interface between a computer user and computer hardware.
                An operating system is a software which performs all the basic tasks like file
                management, memory management, process management, handling input and output, and
                controlling peripheral devices such as disk drives and printers.
                Some popular Operating Systems include Linux Operating System, Windows Operating 
                System, VMS, OS/400, AIX, z/OS, etc.
            </p>
            <h2 className="sub-heading" id="I2">Why to learn Operating Systems ?</h2>
            <p className="paragraph">An Operating System (OS) is an interface between a computer user
                and computer hardware. An operating system is a software which performs all the basic tasks
                like file management, memory management, process management, handling input and output,
                and controlling peripheral devices such as disk drives and printers.
                Some popular Operating Systems include Linux Operating System, Windows Operating System,
                VMS, OS/400, AIX, z/OS, etc.Following are some of important functions of an operating System.
                <ul>
                    <li>Memory Management</li>
                    <li>Processor Management</li>
                    <li>Device Management</li>
                    <li>File Management</li>
                    <li>Security</li>
                    <li>Control over system performance</li>
                    <li>Job accounting</li >
                    <li>Error detecting aids</li >
                    <li>Coordination between other software and users</li>  
                </ul>
                </p>
                <h2 className="sub-heading" id="I3">Applications of Operating System</h2>
                <p className="paragraph">
                Following are some of the important activities that an Operating System performs −
                <ul>
                    <li><b>Security −</b> By means of password and similar other techniques, it prevents unauthorized
                    access to programs and data.</li>

                    <li><b>Control over system performance −</b> Recording delays between request for a service and
                        response from the system.</li>

                    <li><b>Job accounting −</b> Keeping track of time and resources used by various jobs and users.</li>

                    <li><b>Error detecting aids −</b> Production of dumps, traces, error messages, and other debugging
                                and error detecting aids.</li>

                    <li><b>Coordination between other softwares and users −</b> Coordination and assignment of compilers,
                    interpreters, assemblers and other software to the various users of the computer systems.</li>
                </ul>
                </p>
                <h2 className="sub-heading" id="I4">Memory Management</h2>
                <p className="paragraph">
                Memory management refers to management of Primary Memory or Main Memory. 
                Main memory is a large array of words or bytes where each word or byte has
                its own address.</p>
            <p className="paragraph"> Main memory provides a fast storage that can be accessed
            directly by the CPU. For a program to be executed, it must in the main memory.
            An Operating System does the following activities for memory management -
            <ul>
                <li>Keeps tracks of primary memory, i.e., what part of it are in use by whom, what
                part are not in use. </li>
                <li>In multiprogramming, the OS decides which process will get
                memory when and how much.</li>
                <li>Allocates the memory when a process requests it to do so.</li>
                <li>De-allocates the memory when a process no longer needs it or has been terminated.</li>
            </ul>
            </p>
                <h2 className="sub-heading" id="I5">Processor Management</h2>
                <p className="paragraph">
                In multiprogramming environment, the OS decides which process gets the processor when
                and for how much time. This function is called process scheduling. An Operating System
                does the following activities for processor management −
                <ul>
                    <li>Keeps tracks of processor and status of process. The program responsible for 
                    this task is known as traffic controller.</li>

                    <li>Allocates the processor (CPU) to a process.</li>

                    <li>De-allocates processor when a process is no longer required.
                    </li>
                </ul>
            </p>
                <h2 className="sub-heading" id="I6">Device Management</h2>
            <p className="paragraph">
                An Operating System manages device communication via their respective drivers.
                It does the following activities for device management −
                <ul>
                    <li>Keeps tracks of all devices. Program responsible for this task is known
                    as the I/O controller.</li>

                    <li>Decides which process gets the device when and for how much time.</li>

                    <li>Allocates the device in the efficient way.</li>

                    <li>De-allocates devices.</li>
                </ul>
            </p>
                <h2 className="sub-heading" id="I7">File Management</h2>
                <p className="paragraph">
                A file system is normally organized into directories for easy navigation and usage.
                These directories may contain files and other directions.An Operating System does
                the following activities for file management −
                <ul>
                    <li>Keeps track of information, location, uses, status etc. The collective facilities
                    are often known as file system.</li>

                    <li>Decides who gets the resources.</li>

                    <li>Allocates the resources.</li>

                    <li>De-allocates the resources.</li>
                </ul>
            </p>
            <h2 className="sub-heading" id="I8">Other Important Activities</h2>
            <p className="paragraph">
                Following are some of the important activities that an Operating System performs −
                <ul>
                    <li><b>Security −</b> By means of password and similar other techniques, it prevents
                    unauthorized access to programs and data.</li>

                    <li><b>Control over system performance −</b> Recording delays between request for a service
                        and response from the system.</li>

                    <li><b>Job accounting −</b> Keeping track of time and resources used by various jobs and users.</li>

                    <li><b>Error detecting aids −</b> Production of dumps, traces, error messages, and other
                                debugging and error detecting aids.</li>

                    <li><b>Coordination between other softwares and users −</b> Coordination and assignment of
                    compilers, interpreters, assemblers and other software to the various users
                        of the computer systems.</li>
                </ul>
            </p>
                <br />
                <br />
            </div>}</>
    );
}

export default OperatingSystem;
