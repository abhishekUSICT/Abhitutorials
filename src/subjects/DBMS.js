import React, { useState, useEffect } from 'react';
import ModalImage from "react-modal-image";
function DBMS() {

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
                    <li><a className="paragraph" href="#I2">Why to learn DBMS ?</a></li>
                    <li><a className="paragraph" href="#I3">Applications of DBMS</a></li>
                    <li><a className="paragraph" href="#I4">Characteristics</a></li>
                    <li><a className="paragraph" href="#I5">Users</a></li>
                </ul>
                <h2 className="sub-heading" id="I1">Introduction</h2>
                <p className="paragraph">
                Database Management System or DBMS in short refers to the technology of storing 
                and retrieving usersí data with utmost efficiency along with appropriate security
                measures. This tutorial explains the basics of DBMS such as its architecture,
                data models, data schemas, data independence, E-R model, relation model, 
                relational database design, and storage and file structure and much more.
            </p>
            <p className="paragraph">
                Database is a collection of related data and data is a collection of facts and
                figures that can be processed to produce information.
                Mostly data represents recordable facts. Data aids in producing information,
                which is based on facts. For example, if we have data about marks obtained by
                all students, we can then conclude about toppers and average marks.
                A database management system stores data in such a way that it becomes easier
                to retrieve, manipulate, and produce information.
                </p>
                <h2 className="sub-heading" id="I2">Why to learn DBMS ?</h2>
            <p className="paragraph">Traditionally, data was organized in file formats. DBMS was
            a new concept then, and all the research was done to make it overcome the deficiencies
                in traditional style of data management. A modern DBMS has the following
                characteristics −

                <ul>
                    <li>
                        <b>Real-world entity −</b> A modern DBMS is more realistic and uses real-world
                        entities to design its architecture. It uses the behavior and attributes
                        too. For example, a school database may use students as an entity and their
                        age as an attribute.
                    </li>
                    <li>
                        <b>Relation-based tables −</b> DBMS allows entities and relations among them to
                        form tables. A user can understand the architecture of a database just by
                        looking at the table names.
                    </li>
                    <li>
                        <b>Isolation of data and application −</b> A database system is entirely different
                        than its data. A database is an active entity, whereas data is said to be
                        passive, on which the database works and organizes. DBMS also stores
                        metadata, which is data about data, to ease its own process.
                    </li>
                    <li>
                        <b>Less redundancy −</b> DBMS follows the rules of normalization, which splits
                        a relation when any of its attributes is having redundancy in values. 
                        Normalization is a mathematically rich and scientific process that reduces
                        data redundancy.
                    </li>
                    <li>
                        <b>Consistency −</b> Consistency is a state where every relation in a database
                        remains consistent. There exist methods and techniques, which can detect
                        attempt of leaving database in inconsistent state. A DBMS can provide
                        greater consistency as compared to earlier forms of data storing 
                        applications like file-processing systems.
                    </li>
                    <li>
                        <b>Query Language −</b> DBMS is equipped with query language, which makes it
                        more efficient to retrieve and manipulate data. A user can apply as many
                        and as different filtering options as required to retrieve a set of data.
                        Traditionally it was not possible where file-processing system was used.
                    </li>
                </ul>
                </p>
                
                <h2 className="sub-heading" id="I3">Applications of DBMS</h2>
                <p className="paragraph">
                Database is a collection of related data and data is a collection of facts and
                figures that can be processed to produce information.
                </p>
                <p className="paragraph">
                Mostly data represents recordable facts. Data aids in producing information,
                which is based on facts. For example, if we have data about marks obtained by
                all students, we can then conclude about toppers and average marks.
                </p>
                <p className="paragraph">
                A database management system stores data in such a way that it becomes easier to retrieve, manipulate, and produce information. Following are the important characteristics and applications of DBMS.
                <ul>
                    <li>
                        <b>ACID Properties −</b> DBMS follows the concepts of Atomicity, Consistency,
                        Isolation, and Durability (normally shortened as ACID). These concepts
                        are applied on transactions, which manipulate data in a database. ACID
                        properties help the database stay healthy in multi-transactional 
                        environments and in case of failure.
                    </li>
                    <li>
                        <b>Multiuser and Concurrent Access −</b> DBMS supports multi-user environment
                        and allows them to access and manipulate data in parallel. Though there
                        are restrictions on transactions when users attempt to handle the same
                        data item, but users are always unaware of them.
                    </li>
                    <li>
                        <b>Multiple views −</b> DBMS offers multiple views for different users. A user
                        who is in the Sales department will have a different view of database
                        than a person working in the Production department. This feature enables
                        the users to have a concentrate view of the database according to their
                        requirements.
                    </li>
                    <li>
                        <b>Security −</b> Features like multiple views offer security to some extent
                        where users are unable to access data of other users and departments.
                        DBMS offers methods to impose constraints while entering data into the
                        database and retrieving the same at a later stage. DBMS offers many
                        different levels of security features, which enables multiple users
                        to have different views with different features. For example, a user
                        in the Sales department cannot see the data that belongs to the Purchase
                        department. Additionally, it can also be managed how much data of the
                        Sales department should be displayed to the user. Since a DBMS is not
                        saved on the disk as traditional file systems, it is very hard for
                        miscreants to break the code.
                    </li>
                    </ul>
                </p>
                
            <h2 className="sub-heading" id="I4">Characteristics</h2>
                <p className="paragraph">
                Traditionally, data was organized in file formats. DBMS was a new concept then,
                and all the research was done to make it overcome the deficiencies in traditional
                style of data management. A modern DBMS has the following characteristics −
                <ul>
                        <li>
                        <b>Real-world entity −</b> A modern DBMS is more realistic and uses 
                        real-world entities to design its architecture. It uses the behavior
                        and attributes too. For example, a school database may use students 
                        as an entity and their age as an attribute.
                        </li>
                        <li>
                        <b>Relation-based tables −</b> DBMS allows entities and relations among
                        them to form tables. A user can understand the architecture of a
                        database just by looking at the table names.
                        </li>
                    <li>
                        <b>Isolation of data and application −</b> A database system is entirely
                        different than its data. A database is an active entity, whereas data
                        is said to be passive, on which the database works and organizes. DBMS
                        also stores metadata, which is data about data, to ease its own process.
                        </li>
                    <li>
                        <b>Less redundancy −</b> DBMS follows the rules of normalization,
                        which splits a relation when any of its attributes is having redundancy
                        in values. Normalization is a mathematically rich and scientific process
                        that reduces data redundancy.
                        </li>
                    <li>
                        <b>Consistency −</b> Consistency is a state where every relation in a
                        database remains consistent. There exist methods and techniques, which
                        can detect attempt of leaving database in inconsistent state. A DBMS 
                        can provide greater consistency as compared to earlier forms of data 
                        storing applications like file-processing systems.
                        </li>
                    <li>
                        <b>Query Language −</b> DBMS is equipped with query language, which 
                        makes it more efficient to retrieve and manipulate data. A user can
                        apply as many and as different filtering options as required to retrieve
                        a set of data. Traditionally it was not possible where file-processing
                        system was used.
                        </li>
                    <li>
                        <b>ACID Properties −</b> DBMS follows the concepts of Atomicity, 
                        Consistency, Isolation, and Durability (normally shortened as ACID).
                        These concepts are applied on transactions, which manipulate data in
                        a database. ACID properties help the database stay healthy in 
                        multi-transactional environments and in case of failure.
                        </li>
                    <li>
                        <b>Multiuser and Concurrent Access −</b> DBMS supports multi-user 
                        environment and allows them to access and manipulate data in parallel.
                        Though there are restrictions on transactions when users attempt to 
                        handle the same data item, but users are always unaware of them.
                        </li>
                    <li>
                        <b>Multiple views −</b> DBMS offers multiple views for different users.
                        A user who is in the Sales department will have a different view of 
                        database than a person working in the Production department. This feature
                        enables the users to have a concentrate view of the database according
                        to their requirements.
                        </li>
                    <li>
                        <b>Security −</b> Features like multiple views offer security to some
                        extent where users are unable to access data of other users and 
                        departments. DBMS offers methods to impose constraints while entering
                        data into the database and retrieving the same at a later stage. DBMS
                        offers many different levels of security features, which enables 
                        multiple users to have different views with different features. 
                        For example, a user in the Sales department cannot see the data 
                        that belongs to the Purchase department. Additionally, it can also
                        be managed how much data of the Sales department should be displayed
                        to the user. Since a DBMS is not saved on the disk as traditional 
                        file systems, it is very hard for miscreants to break the code.
                    </li>
                    </ul>
                </p>
                <h2 className="sub-heading" id="I5">Users</h2>
                <p className="paragraph">
                A typical DBMS has users with different rights and permissions who use it
                for different purposes. Some users retrieve data and some back it up. The
                users of a DBMS can be broadly categorized as follows −
                <ul>
                    <li>
                        <b>Administrators −</b> Administrators maintain the DBMS and are responsible for administrating the database. They are responsible to look after its usage and by whom it should be used. They create access profiles for users and apply limitations to maintain isolation and force security. Administrators also look after DBMS resources like system license, required tools, and other software and hardware related maintenance.
                    </li>
                    <li>
                        <b>Designers −</b> Designers are the group of people who actually work on the designing part of the database. They keep a close watch on what data should be kept and in what format. They identify and design the whole set of entities, relations, constraints, and views.
                    </li>
                    <li>
                        <b>End Users −</b> End users are those who actually reap the benefits of having a DBMS. End users can range from simple viewers who pay attention to the logs or market rates to sophisticated users such as business analysts.
                    </li>
                    </ul>
            </p>
                <br />
                <br />
            </div>}</>
    );
}
export default DBMS;
