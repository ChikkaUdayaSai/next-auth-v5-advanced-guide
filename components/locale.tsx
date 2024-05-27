import getT from 'next-translate/getT'

export async function generateLocale(key: string, locale: string) {
    const t = await getT(locale, "content")
    return t(key)
}