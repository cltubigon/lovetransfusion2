import { openSans } from '@/utilities/fonts/fonts'
import Link from 'next/link'
import TitleSectionComponent from '@/app/components/ThisWebsiteOnly/TitleSectionComponent'
import ContentContainerWithSidebar from '@/app/components/ThisWebsiteOnly/ContentContainerWithSidebar/ContentContainerWithSidebar'
import Image from 'next/image'
import adley from './images/adley-sq.webp'
import Button from '@/app/components/Button'
import CommentAndHeartContainer from '../CommentAndHeartContainer'

export const metadata = {
  title: 'Adley is Battling Leukemia',
  // description: 'Generated by create next app',
}

const AddleyIsBattlingLeukemia = () => {
  const id = '79b1a9fc-cee4-4f0d-ba49-628a6ca37df5'
  return (
    <div className={`${openSans.className}`}>
      <TitleSectionComponent className="md:py-[42px]">
        <div className={'flex text-primary items-center justify-between'}>
          <h1
            className={
              'py-2 max-sm:text-center text-[30px] max-sm:mx-auto font-semibold leading-[40px] md:leading-[50px]'
            }
          >
            Adley is Battling Leukemia
          </h1>
          <div className={'hidden gap-2 md:flex'}>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/'} className="hover:underline">
                Home
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              <Link href={'/recipients'} className="hover:underline">
                Recipients
              </Link>
            </p>
            <p className={'text-[13px] leading-[20px]'}>/</p>
            <p className={'text-[13px] leading-[20px]'}>
              Adley is Battling Leukemia
            </p>
          </div>
        </div>
      </TitleSectionComponent>
      <ContentContainerWithSidebar className={'text-[15px]'}>
        <div className={'flex flex-col md:flex-row gap-[31px] pb-[43px]'}>
          <div className={'group relative w-fit p-[6px] shadow-sm'}>
              <Image
                src={adley}
                placeholder="blur"
                alt="profile picture of adley"
                className=" min-w-full md:min-w-[300px] lg:min-w-[391px] h-auto"
              />
            <div
              className={
                'opacity-0 group-hover:opacity-15 absolute top-0 left-0 w-full h-full bg-primary group-hover:transition-all group-hover:duration-500'
              }
            />
          </div>
          <div className={''}>
            <p className={'mb-[55px]'}>
              Four-year-old Adley is battling leukemia. On February 10, 2022,
              just 2 weeks before her second birthday, Adley was diagnosed with
              B-cell acute lymphoblastic leukemia. She is a precious little girl
              who loves animals and to sing and dance. The past couple of years
              have been a long difficult journey yet Adley’s resilience and
              strength have been nothing short of remarkable. Her final
              chemotherapy treatment will be next month!
            </p>
            <Link href={'/adley'}>
              <Button className="mx-auto text-balance">
                Click here to go to Adley’s Love Transfusion page
              </Button>
            </Link>
          </div>
        </div>
        <CommentAndHeartContainer id={id} />
      </ContentContainerWithSidebar>
    </div>
  )
}

export default AddleyIsBattlingLeukemia
