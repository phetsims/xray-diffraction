// Copyright 2020-2025, University of Colorado Boulder

/**
 * @author Todd Holden (https://tholden79.wixsite.com/mysite2)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import xrayDiffraction from '../xrayDiffraction.js';
import XrayDiffractionModel from './model/XrayDiffractionModel.js';
import XrayDiffractionScreenView from './view/XrayDiffractionScreenView.js';

class XrayDiffractionScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      backgroundColorProperty: new Property( 'white' ),
      tandem: tandem
    };

    super(
      () => new XrayDiffractionModel( tandem.createTandem( 'model' ) ),
      model => new XrayDiffractionScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

xrayDiffraction.register( 'XrayDiffractionScreen', XrayDiffractionScreen );
export default XrayDiffractionScreen;