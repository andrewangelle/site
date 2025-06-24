import { Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function EducationPDF() {
  return (
    <View>
      <Text style={{ ...typography.h3 }}>
        {PDF_CONSTANTS.headings.EDUCATION}
      </Text>

      {PDF_CONSTANTS.education.map((school) => (
        <View key={school.name}>
          <View
            wrap
            style={{
              ...typography.body_1,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Text wrap style={{ fontWeight: 700 }}>{`${school.name}, `}</Text>
            <Text wrap>{` ${school.location} `}</Text>
            <Text wrap>{' — '}</Text>
            <Text wrap style={{ fontFamily: 'BitterItalic' }}>
              {school.title}
            </Text>
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
