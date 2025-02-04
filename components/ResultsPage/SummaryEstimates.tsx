import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect } from 'react'
import { getTranslations } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import {
  BenefitKey,
  Language,
  ResultKey,
} from '../../utils/api/definitions/enums'
import { BenefitResult } from '../../utils/api/definitions/types'
import { useTranslation } from '../Hooks'
import { CustomCollapse } from './CustomCollapse'
import { DeferralTable } from './DeferralTable'
import { Estimation } from './Estimation'

export const SummaryEstimates: React.VFC<{
  headings
  userResults
  partnerResults
  userAge
  partnerAge
  maritalStatus
  partnerReceiving
  involSep
}> = ({
  headings,
  userResults,
  partnerResults,
  userAge,
  partnerAge,
  maritalStatus,
  partnerReceiving,
  involSep,
}) => {
  const tsln = useTranslation<WebTranslations>()
  const apiTrans = getTranslations(tsln._language)

  const language = useRouter().locale as Language

  const currentYear = new Date().getFullYear()

  const getDeferralTable = (benefitKey, result, future, key?): any => {
    return benefitKey === BenefitKey.oas &&
      result.eligibility.result === ResultKey.ELIGIBLE &&
      result.entitlement.result > 0 &&
      result.cardDetail.meta?.tableData !== null ? (
      <DeferralTable
        data={result.cardDetail.meta?.tableData}
        future={future}
        key={`oas-deferral-table-${key}`}
      />
    ) : null
  }

  let collapsed = []

  //To remove recovery tax EC
  useLayoutEffect(() => {
    const element =
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.recoveryTaxPartner.heading}`
      ) ||
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.nonResidentTaxPartner.heading}`
      ) ||
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.recoveryTax.heading}`
      ) ||
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.nonResidentTax.heading}`
      )

    const recoveryBoth =
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.recoveryTaxBoth.heading}`
      ) ||
      document.getElementById(
        `collapse-${apiTrans.detailWithHeading.nonResidentTaxBoth.heading}`
      )

    if (recoveryBoth) {
      element?.remove()
    }
  })

  return (
    <>
      {headings.map((year, index) => {
        const userResult = userResults
          ? userResults.some((obj) => year in obj)
          : null

        const partnerResult = partnerResults
          ? partnerResults.filter((elm) => elm).length > 0
            ? partnerResults.some((obj) => year in obj)
            : null
          : null
        let heading

        if (year == apiTrans.detail.currentEligible) {
          heading = apiTrans.detail.currentEligible
        } else if (index < headings.length - 1) {
          heading = year
        } else {
          heading =
            language == 'fr'
              ? `${apiTrans.detail.lastYearEligible} ${year}`
              : `${year} ${apiTrans.detail.lastYearEligible}`
        }

        const userObj = userResult
          ? userResults.find((obj) => year in obj)
          : null

        const partnerObj = partnerResult
          ? partnerResults.find((obj) => year in obj)
          : null

        const userResultObject = userObj
          ? userObj[Object.keys(userObj)[0]]
          : null

        const partnerResultObject = partnerObj
          ? partnerObj[Object.keys(partnerObj)[0]]
          : null

        let eligible = []
        if (userResultObject) {
          const benefitAge = Object.keys(userResultObject)[0]

          const resultsArray: BenefitResult[] = Object.keys(
            userResultObject[benefitAge]
          ).map((value) => userResultObject[benefitAge][value])

          eligible = resultsArray.filter(
            (result) =>
              result.eligibility?.result === ResultKey.ELIGIBLE ||
              result.eligibility?.result === ResultKey.INCOME_DEPENDENT
          )
        }

        let partnerEligible = []
        if (partnerResultObject) {
          const benefitAge = Object.keys(partnerResultObject)[0]

          const resultsArray: BenefitResult[] = Object.keys(
            partnerResultObject[benefitAge]
          ).map((value) => partnerResultObject[benefitAge][value])

          partnerEligible = resultsArray.filter(
            (result) =>
              result.eligibility?.result === ResultKey.ELIGIBLE ||
              result.eligibility?.result === ResultKey.INCOME_DEPENDENT
          )
        }

        eligible = eligible.concat(partnerEligible)

        return (
          <div key={heading}>
            <h3
              className={`h3 ${index != 0 ? 'mt-5' : ''} mb-5`}
              key={'heading' + heading}
            >
              {heading}
            </h3>
            <div key={`estimation-${year}`} className="mb-5">
              <div key={`estimation-sub-${year}`} className="space-y-4">
                {userResult && (
                  <Estimation
                    partner={false}
                    resultObject={userResultObject}
                    resultArray={userResults}
                    age={userAge}
                    maritalStatus={maritalStatus}
                    partnerReceiving={partnerReceiving}
                    involSep={involSep}
                  />
                )}

                {partnerResult && (
                  <Estimation
                    partner={true}
                    resultObject={partnerResultObject}
                    resultArray={partnerResults}
                    age={partnerAge}
                    maritalStatus={maritalStatus}
                    partnerReceiving={partnerReceiving}
                    involSep={involSep}
                  />
                )}
              </div>
              {eligible &&
                eligible.map((benefit: BenefitResult) => {
                  const collapsedDetails = benefit.cardDetail?.collapsedText

                  const newCollapsedDetails = [...collapsedDetails]
                  if (newCollapsedDetails) {
                    //Find all indexes of deferral options
                    let indexes = newCollapsedDetails.reduce(
                      (acc, item, index) => {
                        if (
                          item.heading ===
                          apiTrans.detailWithHeading.yourDeferralOptions.heading
                        )
                          acc.push(index)
                        return acc
                      },
                      []
                    )

                    //While there are still multiple deferral options, remove the first one
                    while (indexes.length > 1) {
                      newCollapsedDetails.splice(indexes[0], 1) // Remove the first occurrence
                      indexes.shift() // Remove the first index from the list

                      //Recalculate the index since removing the duplicates
                      indexes = newCollapsedDetails.reduce(
                        (acc, item, index) => {
                          if (
                            item.heading ===
                            apiTrans.detailWithHeading.yourDeferralOptions
                              .heading
                          )
                            acc.push(index)
                          return acc
                        },
                        []
                      )
                    }
                  }

                  return (
                    <>
                      {newCollapsedDetails &&
                        newCollapsedDetails.map((detail, index) => {
                          if (!collapsed.includes(detail.heading)) {
                            collapsed.push(detail.heading)
                            return (
                              <CustomCollapse
                                datacy={`collapse-${benefit.benefitKey}-${index}`}
                                key={`collapse-${benefit.benefitKey}-${index}`}
                                id={`collapse-${detail.heading}`}
                                title={detail.heading}
                              >
                                <p
                                  className="leading-[26px]"
                                  key={`collapse-${detail.heading}-${index}`}
                                  dangerouslySetInnerHTML={{
                                    __html: detail.text,
                                  }}
                                />
                                {getDeferralTable(
                                  benefit.benefitKey,
                                  benefit,
                                  true
                                ) &&
                                  detail.heading ===
                                    apiTrans.detailWithHeading
                                      .yourDeferralOptions.heading &&
                                  getDeferralTable(
                                    benefit.benefitKey,
                                    benefit,
                                    true,
                                    index
                                  )}
                              </CustomCollapse>
                            )
                          }
                        })}
                    </>
                  )
                })}
            </div>
            {headings.length > 1 &&
              index < year.length &&
              index != headings.length - 1 && (
                <hr className="border-[#676767] border-solid border-t border-opacity-25" />
              )}
          </div>
        )
      })}
    </>
  )
}
