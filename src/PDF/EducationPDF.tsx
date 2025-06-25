import { Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function EducationPDF() {
  return (
    <View>
      <Text style={typography.h3}>{PDF_CONSTANTS.headings.EDUCATION}</Text>

      {PDF_CONSTANTS.education.map((school) => (
        <View key={school.name}>
          <View
            break
            style={{
              ...typography.body_1,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <View break style={{ lineHeight: 1 }}>
              <Text style={{ fontWeight: 700 }}>{`${school.name} `}</Text>
              <Text>{`${school.location} `}</Text>
            </View>

            <Text>{' — '}</Text>

            <Text style={{ fontFamily: 'BitterItalic' }}>{school.title}</Text>
          </View>

          <Text
            style={{
              ...typography.body_3,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {school.date}
          </Text>
        </View>
      ))}
    </View>
  );
}
