function Spa(){
    return (
        <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{users: [{name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100}]}}>
            <div className="container" style={{padding: "20px"}}>
                <Route path="/" exact component={Home}/>
                <Route path="/CreateAccount/" component={CreateAccount}/>
                <Route path="/alldata/" component={AllData}/>
                <Route path="/balance/" component={Balance}/>
                <Route path="/deposit/" component={Deposit}/>
                <Route path="/login/" component={Login}/>
                <Route path="/withdraw/" component={Withdraw}/>
            </div>
            </UserContext.Provider>
        </div>
        </HashRouter>      
    )
}

/*ReactDOM.render(<Spa/>,
    document.getElementById('root')
    );
    */

    import { createRoot } from 'react-dom/client';
    const container = document.getElementById('root');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App tab="home" />);