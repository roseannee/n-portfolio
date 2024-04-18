import {
  Body,
  Container,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface ContactFormEmailProps {
  email: string
  message: string
}

export default function ContactFormEmail({
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>You&apos;ve received a new email from n-portfolio!</Preview>

      <Tailwind>
        <Body className="bg-white font-sans text-[#24292e]">
          <Container className="mx-auto max-w-xl py-5 pb-12">
            <Section className="px-12">
              <Text className="text-xl">
                From: <strong>{email}</strong>
              </Text>

              <Section className="rounded border border-solid border-[#dedede] p-6">
                <Text>{message}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
