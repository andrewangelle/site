import { Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { typography } from '~/PDF/theme';

export function HeaderPDF() {
  return (
    <View>
      <Text style={typography.h1}>{PDF_CONSTANTS.headings.NAME}</Text>
      <Text style={typography.h2}>{PDF_CONSTANTS.headings.TITLE}</Text>
    </View>
  );
}
