import { Link, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { layout, typography } from '~/PDF/theme';

export function ContactLinksPDF() {
  const {
    CONTACT: { EMAIL, GITHUB, SITE },
  } = PDF_CONSTANTS;
  return (
    <View style={{ ...layout.links, marginBottom: 44 }}>
      <Link style={typography.link} src={EMAIL.href}>
        {EMAIL.title}
      </Link>
      <Link style={typography.link} href={SITE.href}>
        {SITE.title}
      </Link>
      <Link style={typography.link} href={GITHUB.href}>
        {GITHUB.title}
      </Link>
    </View>
  );
}
