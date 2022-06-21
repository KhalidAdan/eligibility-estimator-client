import { Translations } from '../../../i18n/api'
import {
  EligibilityResult,
  EntitlementResult,
  ProcessedInput,
} from '../definitions/types'

export abstract class BaseBenefit<T extends EntitlementResult> {
  private _eligibility: EligibilityResult
  private _entitlement: T
  protected constructor(
    protected input: ProcessedInput,
    protected translations: Translations
  ) {}

  get eligibility(): EligibilityResult {
    if (this._eligibility === undefined)
      this._eligibility = this.getEligibility()
    return this._eligibility
  }

  get entitlement(): T {
    if (this._entitlement === undefined)
      this._entitlement = this.getEntitlement()
    return this._entitlement
  }

  protected getEligibility(): EligibilityResult {
    return undefined
  }

  protected getEntitlement(): T {
    return undefined
  }
}
