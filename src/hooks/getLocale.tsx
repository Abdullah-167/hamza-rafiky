import { useRouter } from 'next/router';

export default function GetLocale() {
    const { locale = 'it' } = useRouter();

    return locale;
}
