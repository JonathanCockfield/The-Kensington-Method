import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does improving posture impact mental health?',
      answer:
        'Better posture aligns the body correctly, reducing physical strain and stress. This alignment can lead to enhanced mood, increased energy levels, and overall mental well-being due to improved bodily functions.'
    },
    {
      question: 'Can this app really improve sexual function?',
      answer:
        'Yes, by strengthening core and pelvic muscles and improving overall posture, The Kensington Method can positively impact sexual health and function, contributing to both physical and mental well-being.'
    },
    {
      question: 'Is the app suitable for beginners?',
      answer:
        'Absolutely! The Kensington Method is designed for individuals of all fitness levels. It offers step-by-step guidance to ensure everyone can safely and effectively improve their posture and health.'
    },
  ],
  [
    {
      question: 'How long before I see improvements in my health?',
      answer:
        'Results can vary based on individual commitment and body condition. However, many users start noticing improvements in posture, breathing, and overall well-being within a few weeks of consistent practice.'
    },
    {
      question: 'Are there specific exercises for breathing improvement?',
      answer:
        'Yes, the app includes targeted exercises that focus on opening up the back and shoulders, thereby enhancing lung capacity and breathing efficiency, which is crucial for mental clarity and stress reduction.'
    },
    {
      question: 'Do I need any special equipment?',
      answer:
        'No special equipment is needed. The Kensington Method focuses on exercises that use your own body weight, making it easy and convenient to practice anywhere.'
    },
  ],
  [
    {
      question: 'How does the app help with metabolic and digestive functions?',
      answer:
        'By improving posture and strengthening the core, The Kensington Method helps in optimizing the alignment and functioning of internal organs, thereby aiding in better metabolic and digestive health.'
    },
    {
      question: 'Is the app helpful for chronic pain related to posture?',
      answer:
        "Yes, many exercises in the app are designed to alleviate chronic pain, especially in the back, neck, and shoulders, often caused by poor posture. It's always recommended to consult with a healthcare professional first."
    },
    {
      question: 'Can I track my progress with the app?',
      answer:
        'Certainly! The app includes features to track your progress, helping you stay motivated and see the tangible benefits of your dedication to better posture and improved health.'
    }
  ]
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
