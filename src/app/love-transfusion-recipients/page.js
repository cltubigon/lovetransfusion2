import { openSans } from '@/utilities/fonts/fonts'
import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import benny from '@/app/_homepage/recentRecipients/images/benny-sq-225x225.webp'
import adley from '@/app/(oldRecipients)/adley-is-battling-leukemia/images/adley-sq.webp'
import emma from '@/app/_homepage/recentRecipients/images/Emma-225x225.webp'
import Icon_facebook2 from '../components/icons/Icon_facebook2'
import Icon_instagram from '../components/icons/Icon_instagram'

const LoveTransfusionPage = () => {
  return (
    <div className={`${openSans.className} py-10`}>
      <div
        className={
          'container md:px-6 lg:px-10 xl:px-0 flex flex-col items-center'
        }
      >
        <div className={'text-center lg:w-[37%] mx-auto'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid grid-cols-1 lg:grid-cols-2 lg:gap-10'}>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Benny - Childhood Cancer</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Adley - Childhood Cancer</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-6 items-start lg:items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex flex-col md:flex-row gap-3'}>
                <Button>Love Transfusion</Button>
                <Button>Facebook</Button>
                <Button>Instagram</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={'text-center lg:w-[37%] mt-[100px] mx-auto'}>
          <h1 className={'text-2xl font-bold'}>All Categories</h1>
          <p className={''}>
            Click a button below a child’s name to select where you want to give
            them a love transfusion.
          </p>
        </div>
        <div className={'grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 lg:gap-10'}>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={benny}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Benny - Childhood Cancer</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={adley}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Adley - Childhood Cancer</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex py-8 gap-4 items-end border-b-[1px] border=[#E5E7EB]'
            }
          >
            <Image
              src={emma}
              alt="profile picture of the recipient"
              className="w-[100px]"
            />
            <div className={'flex flex-col gap-3'}>
              <p className={'font-semibold'}>Emma – Leukemia</p>
              <div className={'flex gap-3 items-center'}>
                <Button className="px-2">Love Transfusion</Button>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_facebook2 className="text-white" />
                </div>
                <div
                  className={
                    'bg-primary hover:bg-primary-600 transition-all duration-300 p-2 rounded-md cursor-pointer'
                  }
                >
                  <Icon_instagram className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoveTransfusionPage
