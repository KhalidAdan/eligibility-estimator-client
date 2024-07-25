import React from 'react'
import { Stepper } from '../Stepper'

const StepperPage: React.FC = () => {
  return (
    <div className="my-14 ml-1">
      <Stepper
        id="stepper123"
        name="Old Age Security Benefits Estimator"
        step="Step 2 of 5"
        heading="Income"
        previousProps={{
          id: 'previous',
          onClick: () => console.log('Previous button clicked'),
        }}
        nextProps={{
          id: 'next',
          onClick: () => console.log('Next button clicked'),
        }}
      />
    </div>
  )
}

export default StepperPage

// Make a mock page where we have a bare bones stepper with hardcoded content that you can step through and see the content change
