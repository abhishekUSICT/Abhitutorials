import React,{useState,useEffect} from 'react';
import './Introduction.css';
import '../global/Global.css';
function Introduction() {
    const [flag,setFlag] = useState(false);
    useEffect(() => {
    setFlag(true)
  }, []);
    return (
        <>{flag &&
        <div className="layout">
            <div className="topbar">
      	        <p className="topheading">Introduction</p>
            </div>
            <h2 className="sub-heading">Table of contents</h2>
            <ul>
                <li><a className="paragraph" href="#I1">Introduction</a></li>
                <li><a className="paragraph" href="#I2">Why to learn Data Structures and Algorithms ?</a></li>
                <li><a className="paragraph" href="#I3">Applications of Data Structures and Algorithms</a></li>
                <li><a className="paragraph" href="#I4">Algorithm Analysis</a></li>
                <li><a className="paragraph" href="#I5">Algorithm Complexity</a></li>
                <li><a className="paragraph" href="#I6">Space Complexity</a></li>
                <li><a className="paragraph" href="#I7">Time Complexity</a></li>
            </ul>
            <h2 className="sub-heading" id="I1">Introduction</h2>
            <p className="paragraph">
                Data Structures are the programmatic way of storing data so that data can be used
                efficiently. Almost every enterprise application uses various types of data structures
                in one or the other way. This tutorial will give you a great understanding on Data
                Structures needed to understand the complexity of enterprise level applications and
                need of algorithms, and data structures.
            </p>
            <p className="paragraph">
                Data Structure is a systematic way to organize data in order to use it efficiently.
                Following terms are the foundation terms of a data structure.
                <ul>
                    <li><b>Interface −</b> Each data structure has an interface. Interface represents the set of operations
                    that a data structure supports. An interface only provides the list of supported operations,
                    type of parameters they can accept and return type of these operations.
                    </li>
                    <li>
                        <b>Implementation −</b> Implementation provides the internal representation of a data structure.
                        Implementation also provides the definition of the algorithms used in the operations of
                        the data structure.
                    </li>
                </ul>
                There are no well-defined standards for writing algorithms. Rather, it is problem and resource
                dependent. Algorithms are never written to support a particular programming code.
                As we know that all programming languages share basic code constructs like loops 
                (do, for, while), flow-control (if-else), etc. These common constructs can be used
                to write an algorithm. We write algorithms in a step-by-step manner, but it is not always
                the case. Algorithm writing is a process and is executed after the problem domain is
                well-defined. That is, we should know the problem domain, for which we are designing
                a solution.
            </p>
            <h2 className="sub-heading" id="I2">Why to learn Data Structures and Algorithms ?</h2>
            <p className="paragraph">As applications are getting complex and data rich, there are
            three common problems that applications face now-a-days.
                <ul>
                    <li>
                        <b>Data Search −</b> Consider an inventory of 1 million(106) items of a store. If the application
                        is to search an item, it has to search an item in 1 million(106) items every time slowing
                        down the search. As data grows, search will become slower.
                    </li>
                    <li>
                        <b>Processor speed −</b> Processor speed although being very high, falls limited if the data grows
                        to billion records.
                    </li>
                    <li>
                        <b>Multiple requests −</b> As thousands of users can search data simultaneously on a web server,
                        even the fast server fails while searching the data.
                    </li>
                </ul>
            </p>
            <p className="paragraph">
                To solve the above-mentioned problems, data structures come to rescue. Data can be
                organized in a data structure in such a way that all items may not be required to be
                searched, and the required data can be searched almost instantly.
            </p>
            <h2 className="sub-heading" id="I3">Applications of Data Structures and Algorithms</h2>
            <p className="paragraph">
                Algorithm is a step-by-step procedure, which defines a set of instructions to be executed in a
                certain order to get the desired output. Algorithms are generally created independent of
                underlying languages, i.e. an algorithm can be implemented in more than one programming
                language. From the data structure point of view, following are some important categories
                of algorithms −
                <ul>
                    <li><b>Search −</b> Algorithm to search an item in a data structure.</li>
                    <li><b>Sort −</b> Algorithm to sort items in a certain order.</li>
                    <li><b>Insert −</b> Algorithm to insert item in a data structure.</li>
                    <li><b>Update −</b> Algorithm to update an existing item in a data structure.</li>
                    <li><b>Delete −</b> Algorithm to delete an existing item from a data structure.</li>
                </ul>
            </p>
            <p className="paragraph">
                The following computer problems can be solved using Data Structures −
                <li>Fibonacci number series</li>
                <li>Knapsack problem</li>
                <li>Tower of Hanoi</li>
                <li>All pair shortest path by Floyd-Warshall</li>
                <li>Shortest path by Dijkstra</li>
                <li>Project scheduling</li>
            </p>
            <h2 className="sub-heading" id="I4">Algorithm Analysis</h2>
            <p className="paragraph">
                Efficiency of an algorithm can be analyzed at two different stages, before implementation
                and after implementation. They are the following −
                <ul>
                    <li>
                        <b>A Priori Analysis −</b> This is a theoretical analysis of an algorithm. Efficiency of
                        an algorithm is measured by assuming that all other factors, for example, processor
                        speed, are constant and have no effect on the implementation.
                    </li>
                    <li>
                        <b>A Posterior Analysis −</b> This is an empirical analysis of an algorithm. The selected
                        algorithm is implemented using programming language. This is then executed on target
                        computer machine. In this analysis, actual statistics like running time and space
                        required, are collected.
                    </li>
                </ul>
                We shall learn about a priori algorithm analysis. Algorithm analysis deals with the
                execution or running time of various operations involved. The running time of an
                operation can be defined as the number of computer instructions executed per operation.
            </p>
            <h2 className="sub-heading" id="I5">Algorithm Complexity</h2>
            <p className="paragraph">
                Suppose X is an algorithm and n is the size of input data, the time and space used by the
                algorithm X are the two main factors, which decide the efficiency of X.
                <ul>
                    <li><b>Time Factor −</b> Time is measured by counting the number of key operations such as
                    comparisons in the sorting algorithm.
                    </li>
                    <li><b>Space Factor −</b> Space is measured by counting the maximum memory space
                    required by the algorithm.
                    </li>
                </ul>
                The complexity of an algorithm f(n) gives the running time and/or the storage
                space required by the algorithm in terms of n as the size of input data.
            </p>
            <h2 className="sub-heading" id="I6">Space Complexity</h2>
            <p className="paragraph">
                Space complexity of an algorithm represents the amount of memory space required
                by the algorithm in its life cycle. The space required by an algorithm is equal
                to the sum of the following two components −
                <ul>
                    <li>
                        A fixed part that is a space required to store certain data and variables,
                        that are independent of the size of the problem. For example, simple variables
                        and constants used, program size, etc.
                    </li>
                    <li>
                        A variable part is a space required by variables, whose size depends on the size
                        of the problem. For example, dynamic memory allocation, recursion stack space, etc.
                    </li>
                </ul>
                Space complexity S(P) of any algorithm P is S(P) = C + SP(I), where C is the fixed part and S(I) is the variable part of the algorithm, which depends on instance characteristic I.
            </p>
            <h2 className="sub-heading" id="I7">Time Complexity</h2>
            <p className="paragraph">
                Time complexity of an algorithm represents the amount of time required by the algorithm
                to run to completion. Time requirements can be defined as a numerical function T(n),
                where T(n) can be measured as the number of steps, provided each step consumes
                constant time.For example, addition of two n-bit integers takes n steps. Consequently,
                the total computational time is T(n) = c ∗ n, where c is the time taken for the addition
                of two bits. Here, we observe that T(n) grows linearly as the input size increases.
            </p>
            <br />
            <br/>
        </div>}</>
  );
}

export default Introduction;