import { Outlet } from "react-router-dom";
import GlobalNav from "./GlobalNav";
import Style from "./LayoutStyle.module.css";

const Layout = () =>{
    return <>
      <article>
        <header className={Style.header}>
            Welcome !
        </header>
      </article>

      <section className={Style['content-section']}>
        <GlobalNav/>
        <main>
          <Outlet/>
        </main>
      </section>
    </>;
}

export default Layout;