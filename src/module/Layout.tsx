import Style from "./LayoutStyle.module.css";

const Layout = () =>{
    return <>
      <article>
        <header className={Style.header}>
            Welcome !
        </header>
      </article>

      <section className={Style['content-section']}>
        <div>This is section</div>
      </section>
    </>;
}

export default Layout;