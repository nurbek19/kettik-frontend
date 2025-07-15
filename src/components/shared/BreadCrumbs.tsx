import { Fragment } from "react/jsx-runtime"
import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { DICTIONARY } from "@/lib/dictionary";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const lang = localStorage.getItem('lang') ?? 'en';

  return (
    <Breadcrumb className="max-[744px]:hidden">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="text-xl text-gray font-semibold">{DICTIONARY[lang].home}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1
          const path = "/" + pathnames.slice(0, index + 1).join("/")
          const label = DICTIONARY[lang][segment] || DICTIONARY[lang].sheet

          return (
            <Fragment key={path}>
              <BreadcrumbSeparator className="text-xl text-gray font-semibold">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  <span className="text-[#005A2E] text-xl font-semibold">{label}</span>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={path} className="text-xl text-gray font-semibold">{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}