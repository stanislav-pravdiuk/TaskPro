import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <SideBar />
            <main>{children}</main>
        </>
    );
};

export default Layout;