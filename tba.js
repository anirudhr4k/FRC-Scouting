var data;
var tba = (function(){

  var obj = {
    'current_version' : '0.3',
    'team_number'     : 'frc5827',
    'app_identifier'  : 'team-analysis',
    'api_base_host'   : 'www.thebluealliance.com',
    'api_base_path'   : '/api/v2/',
    'provide_default_callback' : true,
  };

  // Export to node if running in node. Otherwise, export to window
  var isNode = false;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = obj;
    isNode = true;
  } else {
    window.TBA = obj;
  }

  /**
   * Returns string on version information
   * @return {string} Version information.
   */
  obj.version = function(){
    return 'Currently running version ' + obj.current_version + ' of TBA Javascript API';
  }

  obj.team = {};

  /**
   * Gets information relating to a specific team.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.get = function( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key given.";
    }

    path = "team/" + team_key;
    obj.get( path, callback );
  }

  /**
   * Returns a list of teams, by team number, paginated in sets of 500. Each
   *  page contains teams whose number is between start = 500 * page and
   *  end at end = start + 499, inclusive.
   *
   * @param {integer} page_num Page number of results to retrieve.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.list = function( page_num, callback ) {

    if ( typeof page_num === "undefined" ) {
      page_num = 1;
    }

    page_num = parseInt( page_num );
    path = "teams/" + page_num;
    obj.get( path, callback );

  }

  /**
   * Get an array of the years a specific team participated in events.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.years_participated = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/years_participated";
    obj.get( path, callback );

  }

  /**
   * Gets media resource information relating to a team for a specific year, or
   *  the most current year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get media information on. Defaults to the
   *    current year. Example: '2010', '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.media = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "function" ) {
      callback = year;
      year = undefined;
    }

    if ( year !== undefined ) {
      year = parseInt( year );
      path = "team/" + team_key + "/" + year + "/media";
    } else {
      path = "team/" + team_key + "/media";
    }

    obj.get( path, callback );

  }

  obj.team.history = {};

  /**
   * Gets an array of information on the events a team has ever participated in.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.events = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/events";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects containing the awards a team has ever received.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.awards = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/awards";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the robots a team has
   *  produced, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.robots = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/robots";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the districts a team has
   * participated in, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.districts = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/districts";
    obj.get( path, callback );

  }

  obj.team.event = {};
  /**
   * Get an array of events a team participated in during a given year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.list = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "team/" + team_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given to a specific team at a specific event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.awards = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of match information on matches a given team participated
   *    at a given event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.matches = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  obj.event = {};
  /**
   * Get all the events occuring during a given year.
   *
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.list = function ( year, callback ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "events/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets information on a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.get = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key;
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams that participated in a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.teams = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/teams";
    obj.get( path, callback );

  }

  /**
   * Gets an array of matches that occured at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.matches = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  /**
   * Gets various statistics about teams at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.stats = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/stats";
    obj.get( path, callback );

  }

  /**
   * Gets a ranking of teams that attended a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.rankings = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.awards = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of district points given out at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.distrct_points = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/district_points";
    obj.get( path, callback );

  }

  obj.match = {};
  /**
   * Gets information on a specifc match.
   *
   * @param {string} match_key  The match to get information on. Includes the
   *    event key, competition level, and number. Example: '2014cmp_f1m1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.match.get = function ( match_key ) {

    if ( typeof match_key === "undefined" ) {
      throw "Invalid match key argument given.";
    }

    path = "match/" + match_key;
    obj.get( path, callback );

  }

  obj.district = {};
  /**
   * Gets an array of districts active during a given year.
   *
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.list = function ( year ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    path = "districts/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets an array of events ocurring in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.events = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of team rankings in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.rankings = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams participating in a given district in a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.teams = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/teams";
    obj.get( path, callback );

  }

  /**
   * Fetches a resource from the API server
   * @param {string} path The API path, without begining slash, that follows the
   *    API directory and version path. Example: 'teams/1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.get = function( path, callback )
  {
    if ( obj.team_number === '' || obj.app_identifier === '' ) {
      throw 'Configuration error: Please configure team_number and app_identifier';
    }

    if ( obj.cache.exists( path ) ) {
      callback( obj.cache.get( path ) );
      return true;
    }

    var receiver = function( responseText ) {
      var data = JSON.parse( responseText );
      obj.cache.put( path, data );

      if ( typeof callback === "function" ) {
        callback( data );
      } else if ( obj.provide_default_callback === true ) {
        obj.defaultCallback( data );
      }
    }

    obj.request_handler( obj.api_base_host, obj.api_base_path + path, receiver );
  }

  /**
   * Create request handler based on
   * server environment.
   */
  if ( isNode ) {
    obj.request_handler = function( host, path, callback ) {
      var receiver = function( response ) {
        var responseText = "";
        response.on( 'data', function ( chunk ) {
          responseText += chunk;
        });
        response.on( 'end', function () {
          callback( responseText );
        });
      };
      try {
        var resource = require('https');
        resource.request( {
          hostname: host,
          path: path,
          headers: { 'X-TBA-App-Id' : obj.get_api_identifier() },
        }, receiver ).end();
        return true;
      } catch ( err ) {
        console.log( err );
        return false;
      }
    };
  } else {
    obj.request_handler = function( host, path, callback ) {
      var resource = new XMLHttpRequest();
      resource.onreadystatechange = function() {
          if (resource.readyState == 4 && resource.status == 200) {
            callback( resource.responseText );
          }
      }
      resource.open( "GET", "https://" + host + path, true );
      resource.setRequestHeader( 'X-TBA-App-Id', obj.get_api_identifier() );
      resource.send();
      return true;
    };
  }

  obj.get_api_identifier = function() {
    return obj.team_number + ':' + obj.app_identifier + ':' + obj.current_version;
  }

  /**
   * Default callback to use if no callback is provided. Only used if
   *    obj.provide_default_callback === true. Can be overriden to provide your
   *    own implementation of the default callback.
   */
  obj.defaultCallback = function( results ){
    console.log( 'No callback provided. Printing to log.' );
    console.log( results );
    console.log( 'Current cache statistics:' );
    console.log( obj.cache.stats );
  };

  /**
   * Resource caching to reduce number of requests to the API server. Persists
   *    as long as the Javascript process is running. (Browser refresh clears)
   */
  obj.cache = ( function() {
    var data = {};
    var obj = {
      'enabled' : true,
      'stats'   : {
        'writes' : 0,
        'hits'   : 0,
        'misses' : 0,
      },
    };

    /**
     * Add key/value entry to the cache
     * @param {string} key The key to store the value under. Must be unique.
     * @param {mixed} value The value to associate with the key.
     */
    obj.put = function( key, value ) {
      data[key] = value;
      obj.stats.writes += 1;
      return true;
    }

    /**
     * Retrieves the value associated with a given key.
     * @param {string} key The key to retrieve the value of.
     * @return {mixed} The value associated with the key.
     */
    obj.get = function( key ) {
      var result = undefined;
      if ( obj.exists ( key ) ) {
        result = data[key];
      }
      return result;
    }

    /**
     * Checks if a given key has an associated value
     * @param {string} key The key to check for an associated value
     * @return {boolean} True if the key is associated with a value. If not,
     *    returns false.
     */
    obj.exists = function( key ) {
      var result = false;
      if ( key in data ) {
        result = true;
      }

      // Always record hits/misses for debugging
      if ( result === true ) {
        obj.stats.hits += 1;
      } else {
        obj.stats.misses += 1;
      }

      if ( obj.enabled === false ) {
        result = false;
      }
      return result;
    }

    /**
     * Returns the entire cache data object
     * @return {object} The cache data object containing all key and values
     */
    obj.dump = function() {
      return data;
    }

    return obj;
  })();

  return obj;
})();

var tba2 = (function(){

  var obj = {
    'current_version' : '0.3',
    'team_number'     : 'frc3128',
    'app_identifier'  : 'team-analysis',
    'api_base_host'   : 'www.thebluealliance.com',
    'api_base_path'   : '/api/v2/',
    'provide_default_callback' : true,
  };

  // Export to node if running in node. Otherwise, export to window
  var isNode = false;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = obj;
    isNode = true;
  } else {
    window.TBA = obj;
  }

  /**
   * Returns string on version information
   * @return {string} Version information.
   */
  obj.version = function(){
    return 'Currently running version ' + obj.current_version + ' of TBA Javascript API';
  }

  obj.team = {};

  /**
   * Gets information relating to a specific team.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.get = function( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key given.";
    }

    path = "team/" + team_key;
    obj.get( path, callback );
  }

  /**
   * Returns a list of teams, by team number, paginated in sets of 500. Each
   *  page contains teams whose number is between start = 500 * page and
   *  end at end = start + 499, inclusive.
   *
   * @param {integer} page_num Page number of results to retrieve.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.list = function( page_num, callback ) {

    if ( typeof page_num === "undefined" ) {
      page_num = 1;
    }

    page_num = parseInt( page_num );
    path = "teams/" + page_num;
    obj.get( path, callback );

  }

  /**
   * Get an array of the years a specific team participated in events.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.years_participated = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/years_participated";
    obj.get( path, callback );

  }

  /**
   * Gets media resource information relating to a team for a specific year, or
   *  the most current year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get media information on. Defaults to the
   *    current year. Example: '2010', '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.media = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "function" ) {
      callback = year;
      year = undefined;
    }

    if ( year !== undefined ) {
      year = parseInt( year );
      path = "team/" + team_key + "/" + year + "/media";
    } else {
      path = "team/" + team_key + "/media";
    }

    obj.get( path, callback );

  }

  obj.team.history = {};

  /**
   * Gets an array of information on the events a team has ever participated in.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.events = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/events";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects containing the awards a team has ever received.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.awards = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/awards";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the robots a team has
   *  produced, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.robots = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/robots";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the districts a team has
   * participated in, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.districts = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/districts";
    obj.get( path, callback );

  }

  obj.team.event = {};
  /**
   * Get an array of events a team participated in during a given year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.list = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "team/" + team_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given to a specific team at a specific event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.awards = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of match information on matches a given team participated
   *    at a given event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.matches = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  obj.event = {};
  /**
   * Get all the events occuring during a given year.
   *
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.list = function ( year, callback ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "events/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets information on a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.get = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key;
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams that participated in a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.teams = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/teams";
    obj.get( path, callback );

  }

  /**
   * Gets an array of matches that occured at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.matches = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  /**
   * Gets various statistics about teams at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.stats = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/stats";
    obj.get( path, callback );

  }

  /**
   * Gets a ranking of teams that attended a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.rankings = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.awards = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of district points given out at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.distrct_points = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/district_points";
    obj.get( path, callback );

  }

  obj.match = {};
  /**
   * Gets information on a specifc match.
   *
   * @param {string} match_key  The match to get information on. Includes the
   *    event key, competition level, and number. Example: '2014cmp_f1m1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.match.get = function ( match_key ) {

    if ( typeof match_key === "undefined" ) {
      throw "Invalid match key argument given.";
    }

    path = "match/" + match_key;
    obj.get( path, callback );

  }

  obj.district = {};
  /**
   * Gets an array of districts active during a given year.
   *
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.list = function ( year ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    path = "districts/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets an array of events ocurring in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.events = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of team rankings in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.rankings = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams participating in a given district in a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.teams = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/teams";
    obj.get( path, callback );

  }

  /**
   * Fetches a resource from the API server
   * @param {string} path The API path, without begining slash, that follows the
   *    API directory and version path. Example: 'teams/1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.get = function( path, callback )
  {
    if ( obj.team_number === '' || obj.app_identifier === '' ) {
      throw 'Configuration error: Please configure team_number and app_identifier';
    }

    if ( obj.cache.exists( path ) ) {
      callback( obj.cache.get( path ) );
      return true;
    }

    var receiver = function( responseText ) {
      var data = JSON.parse( responseText );
      obj.cache.put( path, data );

      if ( typeof callback === "function" ) {
        callback( data );
      } else if ( obj.provide_default_callback === true ) {
        obj.defaultCallback( data );
      }
    }

    obj.request_handler( obj.api_base_host, obj.api_base_path + path, receiver );
  }

  /**
   * Create request handler based on
   * server environment.
   */
  if ( isNode ) {
    obj.request_handler = function( host, path, callback ) {
      var receiver = function( response ) {
        var responseText = "";
        response.on( 'data', function ( chunk ) {
          responseText += chunk;
        });
        response.on( 'end', function () {
          callback( responseText );
        });
      };
      try {
        var resource = require('https');
        resource.request( {
          hostname: host,
          path: path,
          headers: { 'X-TBA-App-Id' : obj.get_api_identifier() },
        }, receiver ).end();
        return true;
      } catch ( err ) {
        console.log( err );
        return false;
      }
    };
  } else {
    obj.request_handler = function( host, path, callback ) {
      var resource = new XMLHttpRequest();
      resource.onreadystatechange = function() {
          if (resource.readyState == 4 && resource.status == 200) {
            callback( resource.responseText );
          }
      }
      resource.open( "GET", "https://" + host + path, true );
      resource.setRequestHeader( 'X-TBA-App-Id', obj.get_api_identifier() );
      resource.send();
      return true;
    };
  }

  obj.get_api_identifier = function() {
    return obj.team_number + ':' + obj.app_identifier + ':' + obj.current_version;
  }

  /**
   * Default callback to use if no callback is provided. Only used if
   *    obj.provide_default_callback === true. Can be overriden to provide your
   *    own implementation of the default callback.
   */
  obj.defaultCallback = function( results ){
    console.log( 'No callback provided. Printing to log.' );
    console.log( results );
    console.log( 'Current cache statistics:' );
    console.log( obj.cache.stats );
  };

  /**
   * Resource caching to reduce number of requests to the API server. Persists
   *    as long as the Javascript process is running. (Browser refresh clears)
   */
  obj.cache = ( function() {
    var data = {};
    var obj = {
      'enabled' : true,
      'stats'   : {
        'writes' : 0,
        'hits'   : 0,
        'misses' : 0,
      },
    };

    /**
     * Add key/value entry to the cache
     * @param {string} key The key to store the value under. Must be unique.
     * @param {mixed} value The value to associate with the key.
     */
    obj.put = function( key, value ) {
      data[key] = value;
      obj.stats.writes += 1;
      return true;
    }

    /**
     * Retrieves the value associated with a given key.
     * @param {string} key The key to retrieve the value of.
     * @return {mixed} The value associated with the key.
     */
    obj.get = function( key ) {
      var result = undefined;
      if ( obj.exists ( key ) ) {
        result = data[key];
      }
      return result;
    }

    /**
     * Checks if a given key has an associated value
     * @param {string} key The key to check for an associated value
     * @return {boolean} True if the key is associated with a value. If not,
     *    returns false.
     */
    obj.exists = function( key ) {
      var result = false;
      if ( key in data ) {
        result = true;
      }

      // Always record hits/misses for debugging
      if ( result === true ) {
        obj.stats.hits += 1;
      } else {
        obj.stats.misses += 1;
      }

      if ( obj.enabled === false ) {
        result = false;
      }
      return result;
    }

    /**
     * Returns the entire cache data object
     * @return {object} The cache data object containing all key and values
     */
    obj.dump = function() {
      return data;
    }

    return obj;
  })();

  return obj;
})();

var tba3 = (function(){

  var obj = {
    'current_version' : '0.3',
    'team_number'     : 'frc3128',
    'app_identifier'  : 'team-analysis',
    'api_base_host'   : 'www.thebluealliance.com',
    'api_base_path'   : '/api/v2/',
    'provide_default_callback' : true,
  };

  // Export to node if running in node. Otherwise, export to window
  var isNode = false;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = obj;
    isNode = true;
  } else {
    window.TBA = obj;
  }

  /**
   * Returns string on version information
   * @return {string} Version information.
   */
  obj.version = function(){
    return 'Currently running version ' + obj.current_version + ' of TBA Javascript API';
  }

  obj.team = {};

  /**
   * Gets information relating to a specific team.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.get = function( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key given.";
    }

    path = "team/" + team_key;
    obj.get( path, callback );
  }

  /**
   * Returns a list of teams, by team number, paginated in sets of 500. Each
   *  page contains teams whose number is between start = 500 * page and
   *  end at end = start + 499, inclusive.
   *
   * @param {integer} page_num Page number of results to retrieve.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.list = function( page_num, callback ) {

    if ( typeof page_num === "undefined" ) {
      page_num = 1;
    }

    page_num = parseInt( page_num );
    path = "teams/" + page_num;
    obj.get( path, callback );

  }

  /**
   * Get an array of the years a specific team participated in events.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.years_participated = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/years_participated";
    obj.get( path, callback );

  }

  /**
   * Gets media resource information relating to a team for a specific year, or
   *  the most current year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get media information on. Defaults to the
   *    current year. Example: '2010', '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.media = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "function" ) {
      callback = year;
      year = undefined;
    }

    if ( year !== undefined ) {
      year = parseInt( year );
      path = "team/" + team_key + "/" + year + "/media";
    } else {
      path = "team/" + team_key + "/media";
    }

    obj.get( path, callback );

  }

  obj.team.history = {};

  /**
   * Gets an array of information on the events a team has ever participated in.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.events = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/events";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects containing the awards a team has ever received.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.awards = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/awards";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the robots a team has
   *  produced, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.robots = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/robots";
    obj.get( path, callback );

  }

  /**
   * Get an array of objects contain information on the districts a team has
   * participated in, by year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.history.districts = function ( team_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }

    path = "team/" + team_key + "/history/districts";
    obj.get( path, callback );

  }

  obj.team.event = {};
  /**
   * Get an array of events a team participated in during a given year.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.list = function ( team_key, year, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "team/" + team_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given to a specific team at a specific event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.awards = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of match information on matches a given team participated
   *    at a given event.
   *
   * @param {string} team_key The team to get information on, prepended with the
   *    program tag. Example: 'frc3128'
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.team.event.matches = function ( team_key, event_key, callback ) {

    if ( typeof team_key === "undefined" ) {
      throw "Invalid team key argument given.";
    }
    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "team/" + team_key + "/event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  obj.event = {};
  /**
   * Get all the events occuring during a given year.
   *
   * @param {integer} year The year to get information on. Example: '2015'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.list = function ( year, callback ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "events/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets information on a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.get = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key;
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams that participated in a given event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.teams = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/teams";
    obj.get( path, callback );

  }

  /**
   * Gets an array of matches that occured at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.matches = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/matches";
    obj.get( path, callback );

  }

  /**
   * Gets various statistics about teams at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.stats = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/stats";
    obj.get( path, callback );

  }

  /**
   * Gets a ranking of teams that attended a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.rankings = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of awards given at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.awards = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/awards";
    obj.get( path, callback );

  }

  /**
   * Gets an array of district points given out at a specific event.
   *
   * @param {string} event_key  The event to get information on. Includes the
   *    event code, prepended by the year. Example: '2016casd', '2015nvlv'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.event.distrct_points = function ( event_key, callback ) {

    if ( typeof event_key === "undefined" ) {
      throw "Invalid event key argument given.";
    }

    path = "event/" + event_key + "/district_points";
    obj.get( path, callback );

  }

  obj.match = {};
  /**
   * Gets information on a specifc match.
   *
   * @param {string} match_key  The match to get information on. Includes the
   *    event key, competition level, and number. Example: '2014cmp_f1m1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.match.get = function ( match_key ) {

    if ( typeof match_key === "undefined" ) {
      throw "Invalid match key argument given.";
    }

    path = "match/" + match_key;
    obj.get( path, callback );

  }

  obj.district = {};
  /**
   * Gets an array of districts active during a given year.
   *
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.list = function ( year ) {

    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    path = "districts/" + year;
    obj.get( path, callback );

  }

  /**
   * Gets an array of events ocurring in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.events = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/events";
    obj.get( path, callback );

  }

  /**
   * Gets an array of team rankings in a given district during a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.rankings = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/rankings";
    obj.get( path, callback );

  }

  /**
   * Gets an array of teams participating in a given district in a given year.
   *
   * @param {string} district_key  The district to get information on.
   *    Examples: 'ne', 'in', 'mar'
   * @param {integer} year The year to get information on.
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.district.teams = function ( district_key, year, callback ) {

    if ( typeof district_key === "undefined" ) {
      throw "Invalid district key argument given.";
    }
    if ( typeof year === "undefined" ) {
      throw "Invalid year argument given.";
    }

    year = parseInt( year );
    path = "district/" + district_key + "/" + year + "/teams";
    obj.get( path, callback );

  }

  /**
   * Fetches a resource from the API server
   * @param {string} path The API path, without begining slash, that follows the
   *    API directory and version path. Example: 'teams/1'
   * @param {function} callback The function to call with the results of the API
   *    call. Passed a single JSON object with results.
   */
  obj.get = function( path, callback )
  {
    if ( obj.team_number === '' || obj.app_identifier === '' ) {
      throw 'Configuration error: Please configure team_number and app_identifier';
    }

    if ( obj.cache.exists( path ) ) {
      callback( obj.cache.get( path ) );
      return true;
    }

    var receiver = function( responseText ) {
      var data = JSON.parse( responseText );
      obj.cache.put( path, data );

      if ( typeof callback === "function" ) {
        callback( data );
      } else if ( obj.provide_default_callback === true ) {
        obj.defaultCallback( data );
      }
    }

    obj.request_handler( obj.api_base_host, obj.api_base_path + path, receiver );
  }

  /**
   * Create request handler based on
   * server environment.
   */
  if ( isNode ) {
    obj.request_handler = function( host, path, callback ) {
      var receiver = function( response ) {
        var responseText = "";
        response.on( 'data', function ( chunk ) {
          responseText += chunk;
        });
        response.on( 'end', function () {
          callback( responseText );
        });
      };
      try {
        var resource = require('https');
        resource.request( {
          hostname: host,
          path: path,
          headers: { 'X-TBA-App-Id' : obj.get_api_identifier() },
        }, receiver ).end();
        return true;
      } catch ( err ) {
        console.log( err );
        return false;
      }
    };
  } else {
    obj.request_handler = function( host, path, callback ) {
      var resource = new XMLHttpRequest();
      resource.onreadystatechange = function() {
          if (resource.readyState == 4 && resource.status == 200) {
            callback( resource.responseText );
          }
      }
      resource.open( "GET", "https://" + host + path, true );
      resource.setRequestHeader( 'X-TBA-App-Id', obj.get_api_identifier() );
      resource.send();
      return true;
    };
  }

  obj.get_api_identifier = function() {
    return obj.team_number + ':' + obj.app_identifier + ':' + obj.current_version;
  }

  /**
   * Default callback to use if no callback is provided. Only used if
   *    obj.provide_default_callback === true. Can be overriden to provide your
   *    own implementation of the default callback.
   */
  obj.defaultCallback = function( results ){
    console.log( 'No callback provided. Printing to log.' );
    console.log( results );
    console.log( 'Current cache statistics:' );
    console.log( obj.cache.stats );
  };

  /**
   * Resource caching to reduce number of requests to the API server. Persists
   *    as long as the Javascript process is running. (Browser refresh clears)
   */
  obj.cache = ( function() {
    data = {};
    var obj = {
      'enabled' : true,
      'stats'   : {
        'writes' : 0,
        'hits'   : 0,
        'misses' : 0,
      },
    };

    /**
     * Add key/value entry to the cache
     * @param {string} key The key to store the value under. Must be unique.
     * @param {mixed} value The value to associate with the key.
     */
    obj.put = function( key, value ) {
      data[key] = value;
      obj.stats.writes += 1;
      return true;
    }

    /**
     * Retrieves the value associated with a given key.
     * @param {string} key The key to retrieve the value of.
     * @return {mixed} The value associated with the key.
     */
    obj.get = function( key ) {
      var result = undefined;
      if ( obj.exists ( key ) ) {
        result = data[key];
      }
      return result;
    }

    /**
     * Checks if a given key has an associated value
     * @param {string} key The key to check for an associated value
     * @return {boolean} True if the key is associated with a value. If not,
     *    returns false.
     */
    obj.exists = function( key ) {
      var result = false;
      if ( key in data ) {
        result = true;
      }

      // Always record hits/misses for debugging
      if ( result === true ) {
        obj.stats.hits += 1;
      } else {
        obj.stats.misses += 1;
      }

      if ( obj.enabled === false ) {
        result = false;
      }
      return result;
    }

    /**
     * Returns the entire cache data object
     * @return {object} The cache data object containing all key and values
     */
    obj.dump = function() {
      return data;
    }

    return obj;
  })();

  return obj;
})();
