import { Resource } from 'i18next'
import enLocale from './en-US.locale'
import roLocale from './ro-RO.locale'
import esLocale from './es-ES.locale'
import ptLocale from './pt-BR.locale'
import plLocale from './pl-PL.locale'
import svLocale from './sv-SE.locale'
import itLocale from './it-IT.locale'
import frLocale from './fr-FR.locale'
import deLocale from './de-DE.locale'
import nlLocale from './nl-NL.locale'
import idLocale from './id-ID.locale'
import trLocale from './tr-TR.locale'

export default interface Locale {
    home: {
        title: string
        subtitle: string
        cards: {
            whyDifferent: {
                title: string
                description: string
            }
            howItWorks: {
                title: string
                description: string
            }
        }
        installationInstructions: string
        showcase: {
            title: string
            packageSearch: string
        }
    }
    navbar: {
        title: string
        contribute: {
            title: string
            workOnFeatures: string
            helpTranslate: string
            becomeAMaintainer: string
        }
        social: {
            title: string
            discord: string
            matrix: string
            reddit: string
            mastodon: string
        }
        browse: {
            title: string
        }
        privacy: {
            title: string
        }
        install: string
    }
    cookieConsent: {
        title: string
        paragraphs: [string, string, string, string]
        accept: string
    }
    packageSearch: {
        dropdown: {
            package: string
            packageTooltip: string
            maintainer: string
            maintainerTooltip: string
        }
        orphaned: string
        table: {
            name: string
            maintainer: string
            version: string
            install: string
        }
        versionTooltip: {
            notInRegistry: string
            latest: string
            patch: string
            minor: string
            major: string
            isGit: string
        }
        noResults: string
        search: string
        maintainerTooltip: {
            maintainedBy: string
            noMaintainer: string
        }
        pagination: {
            previous: string
            next: string
        }
    }
    packageDetails: {
        table: {
            name: string
            version: string
            maintainer: string
            dependencies: string
            requiredBy: string
        }
        noResults: string
        orphaned: string
        view: string
        dependenciesModal: {
            title: string
            buildDependencies: string
            optionalDependencies: string
            runtimeDependencies: string
            pacstallDependencies: string
            name: string
            version: string
            close: string
            provider: string
            noDescription: string
        }
        requiredByModal: {
            title: string
            name: string
            provider: string
            close: string
            noDescription: string
        }
        openInGithub: string
        howToInstall: {
            title: string
            step1: string
            step2: string
        }
    }
}

export const translations = {
    'en-US': {
        translation: enLocale,
    },
    'ro-RO': {
        translation: roLocale,
    },
    'es-ES': {
        translation: esLocale,
    },
    'pt-BR': {
        translation: ptLocale,
    },
    'pl-PL': {
        translation: plLocale,
    },
    'sv-SE': {
        translation: svLocale,
    },
    'it-IT': {
        translation: itLocale,
    },
    'nl-NL': {
        translation: nlLocale,
    },
    'fr-FR': {
        translation: frLocale,
    },
    'de-DE': {
        translation: deLocale,
    },
    'id-ID': {
        translation: idLocale,
    },
    'tr-TR': {
        translation: trLocale,
    },
} as const satisfies Resource

export const localeFlags: Record<keyof typeof translations, string> = {
    'en-US': 'US 🇺🇸',
    'de-DE': 'DE 🇩🇪',
    'es-ES': 'ES 🇪🇸',
    'fr-FR': 'FR 🇫🇷',
    'id-ID': 'ID 🇮🇩',
    'it-IT': 'IT 🇮🇹',
    'nl-NL': 'NL 🇳🇱',
    'pl-PL': 'PL 🇵🇱',
    'pt-BR': 'PT 🇧🇷',
    'ro-RO': 'RO 🇷🇴',
    'sv-SE': 'SV 🇸🇪',
    'tr-TR': 'TR 🇹🇷',
}

export const locales = Object.keys(
    translations,
) as (keyof typeof translations)[]
export const flags = Object.values(localeFlags)
export const localeEntries = Object.entries(localeFlags) as unknown as [
    keyof typeof translations,
    string,
][]
