"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const countries = [
  { iso: "af", name: "Afghanistan", code: "+93" },
  { iso: "al", name: "Albania", code: "+355" },
  { iso: "dz", name: "Algeria", code: "+213" },
  { iso: "as", name: "American Samoa", code: "+1" },
  { iso: "ad", name: "Andorra", code: "+376" },
  { iso: "ao", name: "Angola", code: "+244" },
  { iso: "ar", name: "Argentina", code: "+54" },
  { iso: "am", name: "Armenia", code: "+374" },
  { iso: "aw", name: "Aruba", code: "+297" },
  { iso: "us", name: "United States", code: "+1" },
  { iso: "gb", name: "United Kingdom", code: "+44" },
  { iso: "ca", name: "Canada", code: "+1" },
  { iso: "au", name: "Australia", code: "+61" },
  { iso: "at", name: "Austria", code: "+43" },
  { iso: "az", name: "Azerbaijan", code: "+994" },
  { iso: "bs", name: "Bahamas", code: "+1" },
  { iso: "bh", name: "Bahrain", code: "+973" },
  { iso: "bd", name: "Bangladesh", code: "+880" },
  { iso: "bb", name: "Barbados", code: "+1" },
  { iso: "be", name: "Belgium", code: "+32" },
  { iso: "bz", name: "Belize", code: "+501" },
  { iso: "bj", name: "Benin", code: "+229" },
  { iso: "bm", name: "Bermuda", code: "+1" },
  { iso: "bo", name: "Bolivia", code: "+591" },
  { iso: "ba", name: "Bosnia and Herzegovina", code: "+387" },
  { iso: "br", name: "Brazil", code: "+55" },
  { iso: "bg", name: "Bulgaria", code: "+359" },
  { iso: "kh", name: "Cambodia", code: "+855" },
  { iso: "cm", name: "Cameroon", code: "+237" },
  { iso: "cl", name: "Chile", code: "+56" },
  { iso: "cn", name: "China", code: "+86" },
  { iso: "co", name: "Colombia", code: "+57" },
  { iso: "cr", name: "Costa Rica", code: "+506" },
  { iso: "hr", name: "Croatia", code: "+385" },
  { iso: "cy", name: "Cyprus", code: "+357" },
  { iso: "cz", name: "Czech Republic", code: "+420" },
  { iso: "dk", name: "Denmark", code: "+45" },
  { iso: "do", name: "Dominican Republic", code: "+1" },
  { iso: "ec", name: "Ecuador", code: "+593" },
  { iso: "eg", name: "Egypt", code: "+20" },
  { iso: "ee", name: "Estonia", code: "+372" },
  { iso: "fi", name: "Finland", code: "+358" },
  { iso: "de", name: "Germany", code: "+49" },
  { iso: "fr", name: "France", code: "+33" },
  { iso: "it", name: "Italy", code: "+39" },
  { iso: "es", name: "Spain", code: "+34" },
  { iso: "nl", name: "Netherlands", code: "+31" },
  { iso: "ge", name: "Georgia", code: "+995" },
  { iso: "gh", name: "Ghana", code: "+233" },
  { iso: "gr", name: "Greece", code: "+30" },
  { iso: "gt", name: "Guatemala", code: "+502" },
  { iso: "hk", name: "Hong Kong", code: "+852" },
  { iso: "hu", name: "Hungary", code: "+36" },
  { iso: "is", name: "Iceland", code: "+354" },
  { iso: "in", name: "India", code: "+91" },
  { iso: "id", name: "Indonesia", code: "+62" },
  { iso: "ie", name: "Ireland", code: "+353" },
  { iso: "il", name: "Israel", code: "+972" },
  { iso: "ae", name: "United Arab Emirates", code: "+971" },
  { iso: "sa", name: "Saudi Arabia", code: "+966" },
  { iso: "jp", name: "Japan", code: "+81" },
  { iso: "kr", name: "South Korea", code: "+82" },
  { iso: "sg", name: "Singapore", code: "+65" },
  { iso: "jo", name: "Jordan", code: "+962" },
  { iso: "kz", name: "Kazakhstan", code: "+7" },
  { iso: "ke", name: "Kenya", code: "+254" },
  { iso: "kw", name: "Kuwait", code: "+965" },
  { iso: "lv", name: "Latvia", code: "+371" },
  { iso: "lb", name: "Lebanon", code: "+961" },
  { iso: "lt", name: "Lithuania", code: "+370" },
  { iso: "lu", name: "Luxembourg", code: "+352" },
  { iso: "mo", name: "Macau", code: "+853" },
  { iso: "my", name: "Malaysia", code: "+60" },
  { iso: "mt", name: "Malta", code: "+356" },
  { iso: "mx", name: "Mexico", code: "+52" },
  { iso: "ma", name: "Morocco", code: "+212" },
  { iso: "nz", name: "New Zealand", code: "+64" },
  { iso: "ng", name: "Nigeria", code: "+234" },
  { iso: "no", name: "Norway", code: "+47" },
  { iso: "om", name: "Oman", code: "+968" },
  { iso: "pk", name: "Pakistan", code: "+92" },
  { iso: "pa", name: "Panama", code: "+507" },
  { iso: "pe", name: "Peru", code: "+51" },
  { iso: "ph", name: "Philippines", code: "+63" },
  { iso: "pl", name: "Poland", code: "+48" },
  { iso: "pt", name: "Portugal", code: "+351" },
  { iso: "qa", name: "Qatar", code: "+974" },
  { iso: "ro", name: "Romania", code: "+40" },
  { iso: "rs", name: "Serbia", code: "+381" },
  { iso: "sk", name: "Slovakia", code: "+421" },
  { iso: "si", name: "Slovenia", code: "+386" },
  { iso: "za", name: "South Africa", code: "+27" },
  { iso: "lk", name: "Sri Lanka", code: "+94" },
  { iso: "se", name: "Sweden", code: "+46" },
  { iso: "ch", name: "Switzerland", code: "+41" },
  { iso: "tw", name: "Taiwan", code: "+886" },
  { iso: "th", name: "Thailand", code: "+66" },
  { iso: "tr", name: "Turkey", code: "+90" },
  { iso: "ua", name: "Ukraine", code: "+380" },
  { iso: "uy", name: "Uruguay", code: "+598" },
  { iso: "uz", name: "Uzbekistan", code: "+998" },
  { iso: "vn", name: "Vietnam", code: "+84" },
];

export default function PhoneCountryInput({ placeholder = "WhatsApp or phone number", initialIso = "af" }) {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const displayNames = new Intl.DisplayNames([locale], { type: "region" });
  const localizedCountries = countries.map((country) => ({
    ...country,
    name: displayNames.of(country.iso.toUpperCase()) || country.name,
  }));
  const [selectedIso, setSelectedIso] = useState(initialIso);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);
  const selected = localizedCountries.find((country) => country.iso === selectedIso) || null;
  const filtered = localizedCountries.filter((country) => `${country.name} ${country.code}`.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div className="fh-phone-control" ref={rootRef}>
      <input type="hidden" name="phone-country" value={selected?.code || ""} />
      <input type="hidden" name="phone-country-name" value={selected?.name || ""} />
      <div className="fh-phone-country">
        <button type="button" aria-expanded={open} aria-required="true" onClick={() => setOpen((value) => !value)}>
          {selected ? <>
            <img src={`https://flagcdn.com/w40/${selected.iso}.png`} alt="" loading="lazy" />
            <span>{selected.name}</span>
            <strong>{selected.code}</strong>
          </> : <span>{t("selectCode")}</span>}
        </button>
        {open && (
          <div className="fh-phone-menu">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("search")} aria-label={t("searchCountry")} />
            <div>
              {filtered.map((country) => (
                <button
                  className={country.iso === selected?.iso ? "is-selected" : ""}
                  key={`${country.iso}-${country.code}`}
                  type="button"
                  onClick={() => {
                    setSelectedIso(country.iso);
                    setOpen(false);
                    setQuery("");
                  }}
                >
                  <img src={`https://flagcdn.com/w40/${country.iso}.png`} alt="" loading="lazy" />
                  <span>{country.name}</span>
                  <strong>{country.code}</strong>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <input name="phone" autoComplete="tel" placeholder={placeholder} required />
    </div>
  );
}
