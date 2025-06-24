import { Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function SkillsPDF() {
  return (
    <View>
      <Text style={typography.h3}>{PDF_CONSTANTS.headings.SKILLS}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {PDF_CONSTANTS.skills.map((skill) => (
          <Text
            key={skill}
            style={{
              ...typography.body_2,
              color: colors.gray,
            }}
          >
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
}
