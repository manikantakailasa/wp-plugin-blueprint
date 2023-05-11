import { SidebarNavigation } from "@yoast/ui-library"
import { NavLink } from 'react-router-dom';
import Logo from "./logo";
import { topRoutes, utilityRoutes } from "../../data/routes";

export const SideNavHeader = () => {
    return (
        <header className="yst-px-3 yst-mb-6 yst-space-y-6">
            <Logo />
        </header>
    );
}

export const SideNavMenu = () => {
    const primaryMenu = () => {
        return (
            <ul className="yst-flex yst-flex-col yst-gap-1.5">
                {topRoutes.map((page) => (

                    <SideNavMenuItem
                        key={page.name}
                        label={page.title}
                        name={page.name}
                        icon={page.Icon}
                        path={page.name}
                        subItems={page.subRoutes}
                    />

                ))}
            </ul>
        );
    }

    const secondaryMenu = () => {
        return (
            <ul className="yst-flex yst-flex-col yst-gap-1.5 yst-mt-4 yst-pt-4 yst-border-t yst-border-[#D8DEE4]">
                {utilityRoutes.map((page) => (

                    <SideNavMenuItem
                        key={page.name}
                        label={page.title}
                        name={page.name}
                        icon={page.Icon}
                        path={page.name}
                        subItems={page.subRoutes}
                    />

                ))}
            </ul>
        );
    }

    return (
        <div className="yst-px-0.5 yst-space-y-6">

            {primaryMenu()}
            {secondaryMenu()}

        </div>
    );
}

export const SideNavMenuItem = ({ label, name, icon: Icon = null, path, subItems }) => {
    return (
        <li className="yst-mb-0">
            <NavLink to={path} className={`wppb-app-navitem wppb-app-navitem-${name} yst-flex yst-items-center yst-gap-3 yst-px-3 yst-py-2 yst-rounded-md yst-text-sm yst-font-medium yst-text-title leading-none hover:yst-bg-slate-50 [&.active]:yst-bg-[#E2E8F0]`}>
                {Icon &&
                    <Icon className="yst-flex-shrink-0 yst--ml-1 yst-h-6 yst-w-6" />
                }
                {label}
            </NavLink>

            {subItems && subItems.length > 0 &&
                <ul className="yst-ml-8 yst-m-2 yst-space-y-1.5">
                    {subItems.map((subItem) => (
                        <SideNavMenuSubItem
                            label={subItem.title}
                            name={subItem.name}
                            path={subItem.name}
                        />
                    ))}
                </ul>
            }
        </li>
    );
}

export const SideNavMenuSubItem = ({ label, name, path }) => {
    return (
        <li className="yst-m-0 yst-pb-1">
            <NavLink to={path} className={`wppb-app-subnavitem-${name} yst-flex yst-items-center yst-gap-3 yst-px-3 yst-py-2 yst-rounded-md yst-text-sm yst-font-medium yst-text-body leading-none hover:yst-bg-slate-50 [&.active]:yst-bg-[#E2E8F0] [&.active]:yst-text-title`}>
                {label}
            </NavLink>
        </li>
    );
}

export const SideNav = () => {
    return (
        <aside className="wppb-app-sidenav yst-shrink-0 yst-hidden min-[783px]:yst-block yst-pb-6 yst-bottom-0 yst-w-56">
            <SidebarNavigation>
                <SidebarNavigation.Sidebar>
                    <SideNavHeader />
                    <SideNavMenu />
                </SidebarNavigation.Sidebar>
            </SidebarNavigation>
        </aside>
    );
}