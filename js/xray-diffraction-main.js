// Copyright 2020-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Todd Holden (https://tholden79.wixsite.com/mysite2)
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import XrayDiffractionScreen from './xray-diffraction/XrayDiffractionScreen.js';
import XrayDiffractionStrings from './XrayDiffractionStrings.js';

const xrayDiffractionTitleStringProperty = XrayDiffractionStrings[ 'xray-diffraction' ].titleStringProperty;

const simOptions = {
  credits: {
    //TODO fill in credits, https://github.com/phetsims/xray-diffraction/issues/5
    leadDesign: '',
    softwareDevelopment: '',
    team: '',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  }
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( xrayDiffractionTitleStringProperty, [
    new XrayDiffractionScreen( Tandem.ROOT.createTandem( 'xrayDiffractionScreen' ) )
  ], simOptions );
  sim.start();
} );