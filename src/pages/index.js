import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const info = [
    {
      category: 'PAYMENTS',
      title: 'Payment Initiation (PSD2) Testing the chaneeeeeeeege',
      description: 'Initiate payments and retrieve information on the status of the transaction.',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/payment-initiation-psd2'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/payment-initiation-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'ACCOUNTS',
      title: 'Account Information (PSD2) another testing ',
      description: 'Retrieve information from an ABN AMRO account, such as: transactions, balance, and name of the account holder.',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/account-information-psd2'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/account-information-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'ACCOUNTS',
      title: 'Confirmation Availability Funds (PSD2) Testing the changeeeeee',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'ACCOUNTS',
      title: 'Confirmation Availability Funds (PSD2) ',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'ACCOUNTS',
      title: 'Confirmation Availability Funds (PSD2) test ',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'PAYMENTS',
      title: 'n8n TEST',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'PAYMENTS',
      title: 'n8n TEST',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: 'PAYMENTS',
      title: 'n8n TEST',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
    {
      category: '30 de agosto',
      title: 'TEST',
      description: 'Retrieve confirmation on the availability of funds from an ABN AMRO account. ',
      links: [
        {
          title: 'Overview',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2api'
        },
        {
          title: 'Documentation',
          link: 'https://developer.abnamro.com/api-products/confirmation-availability-funds-psd2/reference-documentation'
        }
      ]
    },
  ]
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className='card-container grid grid-cols-3 gap-10'>
        {info && info.map((item, index) => (
          <div key={index} className='card-item flex flex-col justify-between rounded shadow border border-grey-900 py-7 px-5'>
            <div className='grid gap-6'>
              <h4 className='card-item-category text-green-700 font-medium'>{item?.category}</h4>
              <h2 className='card-title text-4xl font-medium'>{item?.title}</h2>
              <p className='card-description'>{item?.description}</p>
            </div>
            <ul className='card-links mt-10'>
              {item?.links?.map((link, index) => (
                <Link href={link?.link}>
                <li key={index} className='text-gray-700'>
                  {link?.title}
                </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}
