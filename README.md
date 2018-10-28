# iPeek
</br>


## About
</br>

__iPeek__ is a command line utility designed to get geolocation about a given IP address (v4 or v6)
</br>
</br>


## Installing iPeek
</br>

iPeek can be installed using NPM:

```shell
npm install -g ipeek
```
</br>
</br>


## Using iPeek
</br>

Once you've installed iPeek globally using NPM, you're good to go!


iPeek has the following available options:

```bash
Usage: ipeek [options]

Options:

  -v, --version       output the version number
  --v4 <IP Address>   Get location data for a given IPV4 Address
  --v6 <IP Address>   Get location data for a given IPV6 Address
  --dns <IP Address>  Look up an IP address using DNS services
  -h, --help          output usage information
```

</br>
</br>


## Example
</br>

__V4 lookup example:__

```
$ ipeek --v4 8.8.8.8

Getting information for 8.8.8.8

Returned Information:

ip: 8.8.8.8
city: Mountain View
region: California
region_code: CA
country: US
country_name: United States
continent_code: NA
in_eu: false
postal: 94035
latitude: 37.386
longitude: -122.0838
timezone: America/Los_Angeles
utc_offset: -0700
country_calling_code: +1
currency: USD
languages: en-US,es-US,haw,fr
asn: AS15169
org: Google LLC
```
</br>
</br>


## Limitations
</br>

This project is __NOT__ meant to be used to look up _local_ IP addresses
</br>
</br>


## History
</br>

- **Alpha v0.0.5**
    - Updated documentation


- **Alpha v0.0.4**
    - Typo fix on v6 module
    - Added an indicator for fetch information


- **Alpha v0.0.3**
    - Fixed install issue


- **Alpha v0.0.1**
    - Initial release
</br>
</br>


## Issues
</br>

Do you have any issues or recommendations for this package? Feel free to open an issue in the [issue](https://github.com/LilithTundrus/NodeIPLookup/issues) section. I'm always happy to help :D
</br>
</br>


## Donating
</br>

Like what I do?
</br>
<a href='https://ko-fi.com/J3J1CYJ2' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</br>

Please consider donating even a little. These projects do take time and effort to maintain.
</br>
</br>


## License
</br>

This project is licensed under the MIT License - see the LICENSE file for details