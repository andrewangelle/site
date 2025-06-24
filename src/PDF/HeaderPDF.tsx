import { Text, View } from '@react-pdf/renderer';
import { typography } from '~/PDF/theme';
import { PDF_CONSTANTS } from './constants';

export function HeaderPDF() {
  return (
    <View>
      <Text style={typography.h1}>{PDF_CONSTANTS.headings.NAME}</Text>
      <Text style={typography.h2}>{PDF_CONSTANTS.headings.TITLE}</Text>
    </View>
  );
}
