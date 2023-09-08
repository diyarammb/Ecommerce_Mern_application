import { useState } from 'react';

export const CheckoutStep2 = ({ onNext, onPrev }) => {
  const [payment, setPayment] = useState('jazz-cash');
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP TWO -->  */}
      <div className='checkout-payment checkout-form'>
        <h4>Payment Methods</h4>
        <div
          className={`checkout-payment__item ${
            payment === 'jazz-cash' && 'active'
          }`}
        >
          <div className='checkout-payment__item-head'>
          <div className="col-md-12 mx-auto">
          <div className='align-items-center py-2 mb-2 smalls jazzCashgrid'>
                    <div className="payment-option-box"  onChange={() => setPayment('jazz-cash')}>
                    <input value="jazzcash" className="online_payment" type="radio" name="payment_option" checked={payment === 'jazz-cash'}/>
                    <div className="d-block p-3 payment-option-title">
                         <img src="/assets/img/jazzchash.png" className="img-fluid mb-2" alt=""/>
                         <span className="d-block text-center">
                         <span className="d-block fw-600 fs-15">Jazz Cash</span>
                         </span>
                    </div>
                    </div>  
                    </div>
                    </div>
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>Card number</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>Expiration date</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>Security code</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`checkout-payment__item ${
            payment === 'Bank_Transfar' && 'active'
          }`}
        >
          <div className='checkout-payment__item-head'>
          <div className="payment-option-box" onClick={() => setPayment('Bank_Transfar')}>
                    <input value="Bank_Transfar" className="online_payment" type="radio" name="payment_option" checked={payment === 'Bank_Transfar'}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/banktransfar.png" className="img-fluid mb-2" alt=""/>
                                                        <span className="d-block text-center">
                                                            <span className="d-block fw-600 fs-15">Bank Transfar</span>
                                                        </span>
            </div>
           </div>  
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>Card number</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>Expiration date</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>Security code</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`checkout-payment__item ${payment === 'barclaycard' && 'active'}`}
        >
          <div className='checkout-payment__item-head'>
          <div className="payment-option-box"  onClick={() => setPayment('barclaycard')}>
                    <input value="barclaycard" className="online_payment" type="radio" name="payment_option" checked={payment === 'barclaycard'}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/cards.png" className="img-fluid mb-2" id="ma-img" alt=""/>
                                                        <span className="d-block text-center">
                                                            <span className="d-block fw-600 fs-15">Credit/Debit Card</span>
                                                        </span>
            </div>
           </div> 
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>Card number</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>Expiration date</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>Security code</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`checkout-payment__item ${payment === 'cash' && 'active'}`}
        >
          <div className='checkout-payment__item-head'>
           <div className="payment-option-box" onClick={() => setPayment('cash')}>
                    <input value="cash_on_delivery" className="online_payment" type="radio" name="payment_option" checked={payment === 'cash'}/>
                    <div className="d-block p-3 payment-option-title">
                    <img src="/assets/img/cod.png" className="img-fluid mb-2" alt=""/>
                                                            <span className="d-block text-center">
                                                                <span className="d-block fw-600 fs-15">Cash on Delivery</span>
                                                            </span>
            </div>
           </div> 
          </div>
          <div className='checkout-payment__item-content'>
            <div className='box-field'>
              <span>Card number</span>
              <input
                type='text'
                className='form-control'
                placeholder='xxxx xxxx xxxx xxxx'
                maxlength='16'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <span>Expiration date</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='mm'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='yy'
                  maxlength='2'
                />
              </div>
              <div className='box-field'>
                <span>Security code</span>
                <input
                  type='text'
                  className='form-control'
                  placeholder='CVV'
                  maxlength='3'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='checkout-buttons'>
          <button onClick={onPrev} className='btn btn-grey btn-icon'>
            <i className='icon-arrow'></i> back
          </button>
          <button onClick={onNext} className='btn btn-icon btn-next'>
            next <i className='icon-arrow'></i>
          </button>
        </div>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
