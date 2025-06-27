import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { typography } from '~/PDF/theme';

export function EducationPDF() {
  return (
    <View>
      <Text style={typography.h3}>{PDF_CONSTANTS.HEADINGS.EDUCATION}</Text>

      {PDF_CONSTANTS.EDUCATION.map((school) => (
        <View key={school.name} style={styles.school_container}>
          <View break style={styles.school_name}>
            <View break style={styles.line_height_1}>
              <Text style={styles.weight_700}>{`${school.name} `}</Text>
              <Text>{`${school.location} `}</Text>
            </View>

            <Text>{' — '}</Text>

            <Text style={styles.bitter_italic}>{school.title}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  school_container: { marginBottom: 8 },
  school_name: {
    ...typography.body_1,
    display: 'flex',
    flexDirection: 'row',
  },
  line_height_1: { lineHeight: 1 },
  weight_700: { fontWeight: 700 },
  bitter_italic: { fontFamily: 'BitterItalic' },
});
