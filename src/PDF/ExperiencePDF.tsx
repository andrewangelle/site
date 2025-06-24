import { Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function ExperiencePDF() {
  return (
    <View>
      <Text style={{ ...typography.h3 }}>
        {PDF_CONSTANTS.headings.EXPERIENCE}
      </Text>

      {PDF_CONSTANTS.jobs.map((job) => (
        <View key={job.name}>
          <JobTitle {...job} />
          <Text
            style={{
              ...typography.body_3,
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {job.date}
          </Text>

          <View
            style={{
              ...typography.body_2,
              color: colors.gray,
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            {job.description.map((text) => (
              <Text
                key={text}
                style={{
                  marginBottom: 8,
                  lineHeight: 1,
                }}
              >
                {text}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

function JobTitle({
  name,
  location,
  title,
}: {
  name: string;
  location: string;
  title: string;
}) {
  return (
    <View
      style={{
        ...typography.body_1,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Text style={{ fontWeight: 700 }}>{`${name}, `}</Text>
      <Text>{` ${location} `}</Text>
      <Text>{' — '}</Text>
      <Text style={{ fontFamily: 'BitterItalic' }}>{title}</Text>
    </View>
  );
}
