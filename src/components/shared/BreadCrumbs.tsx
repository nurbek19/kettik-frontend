import { Fragment } from "react/jsx-runtime"
import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const LABEL_MAP: Record<string, string> = {
  "about": "О нас",
  "gallery": "Галерея",
  "tours": "Туры",
  "kyrgyzstan": "Кыргызстан",
}

export default function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="text-xl text-gray font-semibold">Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1
          const path = "/" + pathnames.slice(0, index + 1).join("/")
          const label = LABEL_MAP[segment] || 'Страница'

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